import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import bcrypt from "bcrypt";

import CustomError from "../utils/CustomError.ts";

import { createAccessToken } from "src/libs/jwt.ts";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "src/config.ts";
import { TokenPayload } from "src/libs/jwt.ts";

/*
  Controladores relacionados con la autenticación de usuarios:
*/

/*
  - register: Registro de nuevos usuarios
*/

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { num_cta, email, fecha_nacimiento, password } = req.body;
  
  try {

    // Mensajes de error para lanzar al momento de ejecución en el frontend
    // Error: Correo ya en uso
    const foundEmail = await prisma.usuario.findFirst({ where: { email } });
    const foundNum_cta = await prisma.usuario.findFirst({ where: { num_cta } });
    if (foundEmail || foundNum_cta) {
      return res.status(400).json( ["Correo o número de cuenta ya está en uso"] );
    };

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
    
    const { email, password } = req.body;

    const usuarioFound = await prisma.usuario.findFirst({
      where: {
        OR: [
          { email }
        ]
      }
    });

    if (!usuarioFound) return res.status(400).json({ message: "Usuario no encontrado"});
    
    const isMatch: boolean = await bcrypt.compare(password, usuarioFound.password);

    if (!isMatch) return res.status(400).json({message: "Correo o contraseña incorrectos"});
    
    const token = await createAccessToken({ id: usuarioFound.id_usuario });
    
    res.cookie('token', token);

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

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {

  try{
    
    const {token} = req.cookies;

    if(!token) throw new CustomError("NO_TOKEN");

    const user = jwt.verify(token, TOKEN_SECRET) as TokenPayload;
    
    const userFound = await prisma.usuario.findUnique({
      where: { id_usuario: user.id }
    });
    
    if(!userFound) throw new CustomError("USER_NOT_FOUND");
    
    return res.json({
      id: userFound.id_usuario,
      num_cta: userFound.num_cta,
      email: userFound.email,
    })
  }
  catch(error){
    next(error);
  }
}

/* Usario de ejemplo
{
  "num_cta": 319284061,
  "email": "test@test.com",
  "password": "test123",
  "fecha_nacimiento": "04-24-2003"
}
*/