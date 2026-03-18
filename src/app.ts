import "dotenv/config";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import CustomError from "./utils/CustomError.ts";
import cookieParser from 'cookie-parser';
import cors from "cors";

import itemRoutes from "./routes/item.routes.ts";
import actividadRoutes from "./routes/actividad.routes.ts"
import categoriaRoutes from "./routes/categoria.routes.ts";

import errorHandler from "./middlewares/errorHandling.ts";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.ts"


const init = () => {
  
  const app = express();
  const PORT = 3000;
  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));

  app.use (morgan("dev"));
  app.use(express.json());
  app.use(cookieParser());
  
  app.use("/api", authRoutes);
  app.use("/items", itemRoutes);
  //app.use("/usuarios", usuarioRoutes);
  app.use("/actividades", actividadRoutes);
  app.use("/categorias", categoriaRoutes);
  
  app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new CustomError("ROUTE_NOT_FOUND");
    next(error); 
  });

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  app.use(errorHandler);
};

export default init;
