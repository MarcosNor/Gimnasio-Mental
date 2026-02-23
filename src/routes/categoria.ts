import { Router } from "express";
import { getCategorias, getCategoriaById } from "../controller/categoria.ts";

const router = Router();

router.get("/", getCategorias);
router.get("/:id", getCategoriaById);

export default router;