import { Router } from "express";
import { postPartida, getPartidasByActividadUsuarioId } from "../controllers/partida.controller.ts";
import { authRequired } from "src/middlewares/validateToken.ts";

const router = Router();

// authRequired para obtener el id_usuario por req.usuario
router.post("/partida", authRequired, postPartida);
router.get("/partida/usuario/:idUsuario/actividad/:idActividad", getPartidasByActividadUsuarioId)

export default router;