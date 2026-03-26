import { Router } from "express";
import { getItems, itemsError } from "../controllers/item.controller.ts";

const router = Router();
router.get("/", getItems);
router.get("/error", itemsError);

export default router;