import type { Request, Response } from "express";
import prisma from "../config/prisma.ts";

export const getItems = async (_req: Request, res: Response) => {
  try {
    const items = await prisma.item.findMany({
      include: {
        respuesta: {
        }
      }
    });

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al leer los items" });
  }
};