import { Router } from "express";
import { getItems } from "../controller/item.ts";

const router = Router();
router.get("/", getItems);

export default router;