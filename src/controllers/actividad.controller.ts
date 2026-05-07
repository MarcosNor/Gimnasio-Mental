import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";
import { generarSlug, generarSlugId } from "src/utils/slug.ts";

// Obtener todas las actividades
export const getActividades = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const actividades = await prisma.actividad.findMany({    });

    if (!actividades || actividades.length === 0) {
      throw new CustomError("ITEMS_NOT_FOUND");
    }

    res.json(actividades);
  } catch (error) {
    next(error);
  }
};

// Obtener una actividad por ID
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

// Obtener las actividades de una categoria
export const getActividadesByCategoriaId = async (req: Request, res: Response, next: NextFunction) => {
  try{

    if(!req.params.id || isNaN(Number(req.params.id))) {
      throw new CustomError("ITEMS_NOT_FOUND");
    }
    const id = Number(req.params.id);

    const actividades = await prisma.actividad.findMany({
      where: {
        id_categoria: id,
        estatus_actividad: true
      },
      include: {
        cat_categoria: true,
      }
    })

    if (!actividades || actividades.length === 0) {
      throw new CustomError("ACT_NOT_FOUND");
    }

    // Agregar el slug a cada actividad para las URLs
    const actividadesConSlug = actividades.map(actividad => ({
      ...actividad,
      slug: generarSlugId(actividad.id_actividad, actividad.nombre),
      slugSinId: generarSlug(actividad.nombre)
    }))

    res.json(actividadesConSlug);
  } catch (error) {
    next(error);
  }
}
