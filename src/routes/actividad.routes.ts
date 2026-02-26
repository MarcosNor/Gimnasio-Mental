import { Router } from "express";
import { getActividadById, getActividades } from "../controller/actividad.controller.ts";

const router = Router();
router.get("/", getActividades);
router.get("/:id", getActividadById);

export default router;