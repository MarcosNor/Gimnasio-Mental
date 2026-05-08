import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";

export const getItemsByActividadId = async (req: Request, res: Response, next: NextFunction) => {
  try {

    if(!req.params.id || isNaN(Number(req.params.id))){
      throw new CustomError("BAD_REQUEST");
    }
    const id = Number(req.params.id);

    const items = await prisma.item.findMany({
      where: {
        id_actividad: id,
        estatus_activo: true
      },
      include: {
        actividad: {
          select: {
            id_actividad: true,
            nombre: true
          }
        }
      }
    });

    if (!items || items.length === 0) {
      throw new CustomError("ITEMS_NOT_FOUND");
    }

    res.json(items);
  } catch (error) {
    next(error);
  }
};