import type { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const validateSchema =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {

    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json(error.issues.map((error: any) => error.message));
    }
  };