import { Router } from "express";
import { getActividadById, getActividades } from "../controllers/actividad.controller.ts";

const router = Router();
router.get("/", getActividades);
router.get("/:id", getActividadById);

export default router;