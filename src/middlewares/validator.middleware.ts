import type { Request, Response, NextFunction } from "express";
import { ZodError, ZodType } from "zod";

export const validateSchema = (schema: ZodType<any>) => (req: Request, res: Response, next: NextFunction) => {

    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      // Si el error es por una verificación de Zod.
      if (error instanceof ZodError) {
        return res.status(400).json(error.issues.map((issue: any) => issue.message));
      }
      return res.status(500).json(["Ocurrió un error inesperado"]);
    }
  };