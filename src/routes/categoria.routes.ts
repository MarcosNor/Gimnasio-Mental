import { Router } from "express";
import { getCategorias, getCategoriaById } from "../controllers/categoria.controller.ts";

const router = Router();

router.get("/categorias", getCategorias);
router.get("/categorias:id", getCategoriaById);

export default router;