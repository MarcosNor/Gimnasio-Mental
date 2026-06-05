import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";
import { TOKEN_SECRET } from "src/config.ts";

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