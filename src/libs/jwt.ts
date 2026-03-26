
import jwt, { JwtPayload } from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.ts";

export interface TokenPayload extends JwtPayload {
  id: number;
}

export function createAccessToken(payload: TokenPayload): Promise<string> {
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