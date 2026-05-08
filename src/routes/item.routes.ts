import { Router } from "express";
import { getItemsByActividadId } from "../controllers/item.controller.ts";

const router = Router();
router.get("/actividad/:id", getItemsByActividadId);

export default router;