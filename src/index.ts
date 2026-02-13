import "dotenv/config";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "admin",
  password: "1234",
  database: "gimnasio_mental",
  connectionLimit: 5
});

const prisma = new PrismaClient({ adapter });

const app = express();
const PORT = 3000;

//app.use(express.json());
//app.use("/items", itemRoutes);

app.get("/items", async (_req, res) => {
  try {
    const items = await prisma.item.findMany();
    
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error al leer los items" });
  }
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}/items`);
});