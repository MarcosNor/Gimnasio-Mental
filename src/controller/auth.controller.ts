import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import bcrypt from "bcrypt";
import CustomError from "../utils/CustomError.ts";
import { createAccessToken } from "src/libs/jwt.ts";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  
  try {const { num_cta, email, fecha_nacimiento, password } = req.body;

  if (!num_cta || !email || !fecha_nacimiento || !password) {
    throw new CustomError("MISSING_FIELDS");
  }

  const existing = await prisma.usuario.findFirst({
    where: {
      OR: [
        { email },
        { num_cta }
      ]
    }
  });

  if (existing) {
    throw new CustomError("PREV_USER");
  }
  
  const hashedPassword = await bcrypt.hash(password, 12);
  
  const nuevoUsuario = await prisma.usuario.create({
    data: {
      num_cta,
      email,
      fecha_nacimiento: new Date(fecha_nacimiento),
      password: hashedPassword,
      
    }
  });
    
  const { password: _, ...usuarioSinPassword } = nuevoUsuario;
  const token = await createAccessToken({ id: nuevoUsuario.id_usuario });
  
  res.cookie('token', token)
  res.status(201).json({
    id: nuevoUsuario.id_usuario,
    num_cta: nuevoUsuario.num_cta,
    email: nuevoUsuario.email,
    createdAt: nuevoUsuario.fecha_registro,
    updatedAt: nuevoUsuario.fecha_actualizacion
  })

  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const { email, num_cta, password } = req.body;

    const usuarioFound = await prisma.usuario.findFirst({
      where: {
        OR: [
          { email },
          { num_cta }
        ]
      }
    });

    if (!usuarioFound) return res.status(400).json({ message: "User not found"});
    
    const isMatch: boolean = await bcrypt.compare(password, usuarioFound.password);

    if (!isMatch) return res.status(400).json({message: "Incorrect password"});
    
    const token = await createAccessToken({ id: usuarioFound.id_usuario });
    
    res.cookie('token', token)
    res.status(201).json({
      id: usuarioFound.id_usuario,
      num_cta: usuarioFound.num_cta,
      email: usuarioFound.email,
      createdAt: usuarioFound.fecha_registro,
      updatedAt: usuarioFound.fecha_actualizacion
    })

  } catch (error) {
    next(error);
  }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })

  return res.sendStatus(200);
}

export const profile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.usuario) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const usuario = await prisma.usuario.findUnique({
      where: {
        id_usuario: req.usuario.id
      },
      select: {
        id_usuario: true,
        num_cta: true,
        email: true,
        fecha_registro: true,
        fecha_actualizacion: true
      }
    });

    if (!usuario) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(usuario);

  } catch (error) {
    next(error);
  }
}