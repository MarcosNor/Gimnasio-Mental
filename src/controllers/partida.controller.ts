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

// Cuando un usuario termina una partida, esta se crea con la información registrada
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

// Obtiene todas las partidas de un usuario en una respectiva actividad con el id de ambos.
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

/*
Funcion que recibe una fila de la tabla estadística y calcula el porcentaje respondido correctamente de la actividad
*/
const calcularPorcentajeActividad = (estadistica: Estadisticas): number => {
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

    const puntuacionMap: Record<number, number> = {};
    for (const partida of partidasPorActividad) {
      puntuacionMap[partida.id_actividad] = partida._sum.puntuacion ?? 0;
    }

    const partidas = await prisma.partida.findMany({
      where: {
        id_usuario: Number(idUsuario),
      },
      select: {
        id_actividad: true,
        estadistica: true,
      },
    });

    const mejorPorcentajeActividad: Record<number, number> = {};
    for (const partida of partidas) {
      const porcentaje = partida.estadistica
        ? calcularPorcentajeActividad(partida.estadistica as Estadisticas)
        : 0;

      const actual = mejorPorcentajeActividad[partida.id_actividad] ?? 0;
      if (porcentaje > actual) {
        mejorPorcentajeActividad[partida.id_actividad] = porcentaje;
      }
    }

    const result = todasLasCategorias.map((categoria) => {
      const puntuacionTotal = categoria.actividad.reduce((acc, actividad) => {
        return acc + (puntuacionMap[actividad.id_actividad] ?? 0);
      }, 0);

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