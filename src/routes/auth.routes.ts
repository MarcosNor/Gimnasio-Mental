import { Router } from "express";
import { login, register, logout, profile, verifyToken } from "../controllers/auth.controller.ts"
import { authRequired } from "../middlewares/validateToken.ts";
import { validateSchema } from "../middlewares/validator.middleware.ts";
import { registerSchema, loginSchema } from "../schemas/auth.schema.ts";

const router = Router();

router.post('/register', validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.get("/verify", verifyToken);

export default router;