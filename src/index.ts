import "dotenv/config";
import express from "express";
import itemRoutes from "./routes/items.ts";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/items", itemRoutes);

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}/items`);
});