import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.ts";
import { TOKEN_SECRET } from "src/config.ts";

export const authRequired = (req: Request, res: Response, next: NextFunction) => {
  
  const {token} = req.cookies;

  if (!token) 
    return res.status(401).json({ message: "No token" });
    //throw new CustomError("NO_TOKEN");
    
  try {

    jwt.verify(token, TOKEN_SECRET, (err: jwt.VerifyErrors | null, user: any) => {
      req.usuario = user;
      next()
    });

  } catch (error) {
    return res.status(403).json({ message: "Invalid token"});
    //throw new CustomError("NO_TOKEN");
  }
    
}