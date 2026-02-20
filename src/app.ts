import "dotenv/config";
import express from "express";
import itemRoutes from "./routes/items.ts";
import usuarioRoutes from "./routes/usuario.ts";


const init = () => {
  
  const app = express();
  const PORT = 3000;
  app.use(express.json());

  app.use("/items", itemRoutes);
  app.use("/usuarios", usuarioRoutes);

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

init();