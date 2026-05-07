import { Router } from "express";
import { getActividadById, getActividades, getActividadesByCategoriaId } from "../controllers/actividad.controller.ts";

const router = Router();
router.get("/actividades", getActividades);
router.get("/actividades/:id", getActividadById);
router.get("/categorias/:id/actividades", getActividadesByCategoriaId);

export default router;