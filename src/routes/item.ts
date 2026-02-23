import { Router } from "express";
import { getItems, itemsError } from "../controller/item.ts";

const router = Router();
router.get("/", getItems);
router.get("/error", itemsError);

export default router;