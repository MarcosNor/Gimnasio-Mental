import { Router } from "express";
import { getItems, getItemsActive, itemsError } from "../controller/item.ts";

const router = Router();
router.get("/", getItems);
router.get("/active", getItemsActive);
router.get("/error", itemsError);

export default router;