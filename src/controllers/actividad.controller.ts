import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";

export const getActividades = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const actividades = await prisma.actividad.findMany({    });

    if (!actividades) {
      throw new CustomError("ITEMS_NOT_FOUND");
    }

    res.json(actividades);
  } catch (error) {
    next(error);
  }
};

export const getActividadById = async (req: Request, res: Response, next: NextFunction) => {
  try {

    if (!req.params.id || isNaN(Number(req.params.id))) {
      throw new CustomError("BAD_REQUEST");
    }
    const id = Number(req.params.id);

    const actividad = await prisma.actividad.findUnique({
      where: {
        id_actividad: id,
      }
    })

    if (!actividad) {
      throw new CustomError("ACT_NOT_FOUND");
    }

    res.json(actividad);
  } catch (error){
    next(error);
  }
}