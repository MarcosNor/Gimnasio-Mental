import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
import CustomError from "./utils/CustomError.ts";
import express from "express";
import itemRoutes from "./routes/item.ts";
import usuarioRoutes from "./routes/usuario.ts";
import actividadRoutes from "./routes/actividad.ts"
import categoriaRoutes from "./routes/categoria.ts";
import errorHandler from "./middlewares/errorHandling.ts";


const init = () => {
  
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  
  app.use("/items", itemRoutes);
  app.use("/usuarios", usuarioRoutes);
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

init();