
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.ts";

interface JwtPayload {
  id: number;
}

export function createAccessToken(payload: JwtPayload): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) return reject(err);
        resolve(token as string);
      }
    );
  });
}