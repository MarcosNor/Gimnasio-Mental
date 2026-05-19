import { Router } from "express";
import { getActividadById, getActividades, getActividadesByCategoriaId, getActividadesByCategoriaNombre } from "../controllers/actividad.controller.ts";

const router = Router();
router.get("/actividades", getActividades);
router.get("/actividades/:id", getActividadById);
router.get("/categorias/:slug/actividades", getActividadesByCategoriaNombre);

export default router;