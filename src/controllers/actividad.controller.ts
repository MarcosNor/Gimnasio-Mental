import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";

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

// Obtener las actividades de una categoria (por el momento no se ocupa)
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
    })

    if (!actividades || actividades.length === 0) {
      throw new CustomError("ACT_NOT_FOUND");
    }

    res.json(actividades);
  } catch (error) {
    next(error);
  }
}

// Obtener las actividades de una categoria por el nombre de la categoria (slug)
export const getActividadesByCategoriaNombre = async (req: Request, res: Response, next: NextFunction) => {
  try{

    if(!req.params.slug || typeof req.params.slug !== "string") {
      throw new CustomError("ITEMS_NOT_FOUND");
    }

    const slugCategoria = req.params.slug;

    // Conseguimos el id de la categoria a través del slug, para luego usarlo para conseguir las actividades de esa categoria
    const id = await prisma.cat_categoria.findUnique({
      where: {
        slug: slugCategoria 
      },
      select: {
        id_categoria: true
      }
    });

    if (!id || isNaN(Number(id.id_categoria))) {
      throw new CustomError("CAT_NOT_FOUND");
    }

    const actividades = await prisma.actividad.findMany({
      where: {
        id_categoria: id.id_categoria,
        estatus_actividad: true
      },
    })

    if (!actividades || actividades.length === 0) {
      throw new CustomError("ACT_NOT_FOUND");
    }

    res.json(actividades);
  } catch (error) {
    next(error);
  }
}

