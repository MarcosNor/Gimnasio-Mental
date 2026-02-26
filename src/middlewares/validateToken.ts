import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.ts";
import { TOKEN_SECRET } from "src/config.ts";

export const authRequired = (req: Request, res: Response, next: NextFunction) => {
  
  const {token} = req.cookies;

  if (!token) 
    return res.status(401).json({ message: "No token" });
    //throw new CustomError("NOT_TOKEN");

  jwt.verify(token, TOKEN_SECRET, (err: jwt.VerifyErrors | null, user: any) => {
    if(err) return res.status(403).json({ message: "Invalid token"});
    req.usuario = user;
    next()
  })

}