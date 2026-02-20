import { Router } from "express";
import prisma from "../config/prisma.ts";
import bcrypt from "bcrypt";
import { getUsuarios } from "../controller/usuario.ts"

const router = Router();

//  GET /usuarios
router.get("/",getUsuarios);

router.post("/", async (req, res) => {
  try {
    const { num_cta, email, fecha_nacimiento, password } = req.body;

    if (!num_cta || !email || !fecha_nacimiento || !password) {
      return res.status(400).json({
        message: "Faltan campos"
      });
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
      return res.status(400).json({
        message: "El usuario ya existe"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        num_cta,
        email,
        fecha_nacimiento: new Date(fecha_nacimiento),
        password: hashedPassword
      }
    });

    const { password: _, ...usuarioSinPassword } = nuevoUsuario;

    res.status(201).json(usuarioSinPassword);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error interno del servidor"
    });
  }
});


export default router;
