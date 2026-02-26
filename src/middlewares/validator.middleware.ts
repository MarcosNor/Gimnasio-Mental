import type { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const validateSchema =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {

    const result = schema.safeParse(req.body);

    if (!result.success) {

      const formattedErrors = result.error.issues.map(issue => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return res.status(400).json({
        errors: formattedErrors,
      });
    }

    req.body = result.data;
    next();
  };