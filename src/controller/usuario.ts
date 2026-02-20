import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";
import bcrypt from "bcrypt";

export const createUsuario = async (req: Request, res: Response, next: NextFunction) => {
  
};

export const getUsuarios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        id_usuario: true,
        num_cta: true,
        email: true,
        fecha_nacimiento: true,
        fecha_registro: true
      }
    });

    if (!usuarios) {
      throw new CustomError("USERS_NOT_FOUND");
    }

    res.json(usuarios);

  } catch (error) {
    next(error);
  }
};
