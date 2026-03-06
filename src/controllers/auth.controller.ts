import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import bcrypt from "bcrypt";
import CustomError from "../utils/CustomError.ts";
import { createAccessToken } from "src/libs/jwt.ts";

/*
  Controladores relacionados con la autenticación de usuarios:
  - register: Registro de nuevos usuarios
*/

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { num_cta, email, fecha_nacimiento, password } = req.body;
  
  try {

    // Mensajes de error para lanzar al momento de ejecución en el frontend
    // Error: Correo ya en uso
    const foundEmail = await prisma.usuario.findFirst({ where: { email } });
    if (foundEmail) {
      return res.status(400).json( ["El correo ya está en uso"] );
    };
    // Error: Numero de cuenta ya en uso
    const foundNum_cta = await prisma.usuario.findFirst({ where: { num_cta } });
    if (foundNum_cta) {
      return res.status(400).json( ["El número de cuenta ya está en uso"] );
    }

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

/*
  - login: Inicio de sesión de usuarios
*/
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

/*
  - logout: Cierre de sesión (elimina el token)
*/
export const logout = (req: Request, res: Response, next: NextFunction) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })

  return res.sendStatus(200);
}

/*
  - profile: Obtiene la información del perfil del usuario autenticado
*/
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

/* 
{
  "num_cta": 319284061,
  "email": "test@test.com",
  "password": "test123",
  "fecha_nacimiento": "04-24-2003"
}
*/