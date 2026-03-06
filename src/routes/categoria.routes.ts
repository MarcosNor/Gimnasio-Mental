import { Router } from "express";
import { getCategorias, getCategoriaById } from "../controllers/categoria.controller.ts";

const router = Router();

router.get("/", getCategorias);
router.get("/:id", getCategoriaById);

export default router;