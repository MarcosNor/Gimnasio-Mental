import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";
import { TOKEN_SECRET } from "src/config.ts";
import { estadistica } from "@prisma/client";

interface Estadisticas {
  id_partida: number;
  aciertos_facil: number;
  total_facil: number;
  aciertos_medio: number;
  total_medio: number;
  aciertos_dificil: number;
  total_dificil: number;
}

export const postPartida = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuario = req.usuario;

    const {id_actividad, puntuacion, estadistica } = req.body;
    
    if (!id_actividad || !puntuacion) {
      throw new CustomError("MISSING_FIELDS");
    }

    if (!usuario) throw new CustomError("USER_NOT_FOUND")

    const id_usuario = usuario.id;

    const nuevaPartida = await prisma.partida.create({
      data: {
        id_actividad,
        id_usuario,
        puntuacion,

        estadistica: {
          create: {
            aciertos_facil: estadistica.aciertos_facil,
            total_facil: estadistica.total_facil,

            aciertos_medio: estadistica.aciertos_medio,
            total_medio: estadistica.total_medio,

            aciertos_dificil: estadistica.aciertos_dificil,
            total_dificil: estadistica.total_dificil
          }
        }
      },
      include: {
        estadistica: true
      }
    });

    res.status(201).json(nuevaPartida);

  } catch (error) {
    next(error);
  }
};

export const getPartidasByActividadUsuarioId = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const {idUsuario, idActividad } = req.params;

    if(!req.params || isNaN(Number(idUsuario)) || isNaN(Number(idActividad))){
      throw new CustomError("BAD_REQUEST");
    }

    const partidas = await prisma.partida.findMany({
      where: {
        id_usuario: Number(idUsuario),
        id_actividad: Number(idActividad)
      },
      include: {
        estadistica: true
      },
      orderBy: {
        fecha: "desc"
      }
    });

    if (!partidas || partidas.length === 0) {
      throw new CustomError("THERE_IS_NO_STATS");
    }

    res.json(partidas);

  } catch (error) {
    next(error);
  }
};

const calcularPorcentajeActividad = (estadistica: Estadisticas): number => {
  // Extraemos directamente los valores de la base de datos con fallbacks a 0
  const totalFacil = estadistica.total_facil ?? 0;
  const aciertosFacil = estadistica.aciertos_facil ?? 0;

  const totalMedio = estadistica.total_medio ?? 0;
  const aciertosMedio = estadistica.aciertos_medio ?? 0;

  const totalDificil = estadistica.total_dificil ?? 0;
  const aciertosDificil = estadistica.aciertos_dificil ?? 0;

  const A = aciertosFacil >= 3 ? aciertosFacil / totalFacil : 0;
  const B = aciertosMedio >= 3 ? aciertosMedio / totalMedio : 0;
  const C = aciertosDificil >= 3 ? aciertosDificil / totalDificil : 0;

  // Cálculo del porcentaje ponderado (sobre base 100)
  const porcentaje = (A * 0.2 + B * 0.3 + C * 0.5) * 100;

  // NOTA: Si multiplicas por 100 otra vez aquí adentro, un 85% se convertirá en 8500.
  // Si tu frontend espera un entero entre 0 y 100, simplemente usa Math.round(porcentaje).
  return Math.round(porcentaje);
};


export const getPuntuacionByUsuarioCategoriaId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idUsuario } = req.params;

    if (!req.params || isNaN(Number(idUsuario))) {
      throw new CustomError("BAD_REQUEST");
    }

    const todasLasCategorias = await prisma.cat_categoria.findMany({
      include: {
        actividad: true,
      },
    });

    const partidasPorActividad = await prisma.partida.groupBy({
      by: ["id_actividad"],
      where: {
        id_usuario: Number(idUsuario),
      },
      _sum: {
        puntuacion: true,
      },
    });

    // Construye un mapa id_actividad -> puntuacion para lookup rápido
    const puntuacionMap: Record<number, number> = {};
    for (const partida of partidasPorActividad) {
      puntuacionMap[partida.id_actividad] = partida._sum.puntuacion ?? 0;
    }

    // NUEVO: obtener todas las partidas con sus estadísticas para calcular el mejor porcentaje
    const partidas = await prisma.partida.findMany({
      where: {
        id_usuario: Number(idUsuario),
      },
      select: {
        id_actividad: true,
        estadistica: true,
      },
    });

    // NUEVO: mapa id_actividad -> mejor porcentaje obtenido
    const mejorPorcentajeActividad: Record<number, number> = {};
    for (const partida of partidas) {

      // Previene si alguna estadistica viene en null o undefined
      const porcentaje = partida.estadistica
        ? calcularPorcentajeActividad(partida.estadistica as Estadisticas)
        : 0;

      const actual = mejorPorcentajeActividad[partida.id_actividad] ?? 0;
      if (porcentaje > actual) {
        mejorPorcentajeActividad[partida.id_actividad] = porcentaje;
      }
    }

    // Suma de puntuaciones por categoría
    const result = todasLasCategorias.map((categoria) => {
      const puntuacionTotal = categoria.actividad.reduce((acc, actividad) => {
        return acc + (puntuacionMap[actividad.id_actividad] ?? 0);
      }, 0);

      // NUEVO: detalle por actividad con su mejor porcentaje
      const actividades = categoria.actividad.map((actividad) => {
        const mejorPorcentaje = mejorPorcentajeActividad[actividad.id_actividad] ?? 0;
        const numActividades = categoria.actividad.length;

        return {
          id_actividad: actividad.id_actividad,
          nombre: actividad.nombre,
          puntuacion: puntuacionMap[actividad.id_actividad] ?? 0,
          mejorPorcentaje,
          aportePorcentajeCategoria: numActividades > 0
            ? Math.round((mejorPorcentaje / numActividades) * 100) / 100
            : 0,
        };
      });

      return {
        categoria: categoria.nombre,
        id_categoria: categoria.id_categoria,
        puntuacionTotal,
        actividades,
      };
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};