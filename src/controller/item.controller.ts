import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma.ts";
import CustomError from "../utils/CustomError.ts";

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await prisma.item.findMany({
      include: {
        respuesta: {
        }
      }
    });

    if (!items) {
      throw new CustomError("ITEMS_NOT_FOUND");
    }

    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const itemsError = async (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new CustomError("ITEM_NOT_FOUND");
  } catch (error) {
    next(error);
  }
}