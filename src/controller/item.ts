// import type { Request, Response } from "express";
// import prisma from "../config/prisma.client.ts";

// export const getItems = async (_req: Request, res: Response) => {
//   try {
//     const items = await prisma.item.findMany();
//     res.json(items);
//   } catch (error) {
//     console.error("Error en getItems:", error);
//     res.status(500).json({ error: "Error al leer los items" });
//   }
// };