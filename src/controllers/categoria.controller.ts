import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";
import { generarSlug, generarSlugId } from "../utils/slug.ts";

// Obtener todas las categorias
export const getCategorias = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const categorias = await prisma.cat_categoria.findMany({    });

    if (!categorias || categorias.length === 0) {
      throw new CustomError("CAT_NOT_FOUND");
    }

    const categoriasConSlug = categorias.map(cat => ({
      ...cat,
      slug: generarSlugId(cat.id_categoria, cat.nombre),
      slugSinId: generarSlug(cat.nombre)
    }))

    res.json(categoriasConSlug);
  } catch (error) {
    next(error);
  }
};

// Obtener una categoria por ID
export const getCategoriaById = async (req: Request, res: Response, next: NextFunction) => {
  try {

    if (!req.params.id || isNaN(Number(req.params.id))) {
      throw new CustomError("BAD_REQUEST");
    }
    const id = Number(req.params.id);

    const categoria = await prisma.cat_categoria.findUnique({
      where: {
        id_categoria: id,
      }
    })

    if (!categoria) {
      throw new CustomError("CAT_NOT_FOUND");
    }

    res.json(categoria);
  } catch (error){
    next(error);
  }
}