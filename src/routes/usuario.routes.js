import usuarioController from '../controllers/usuario.controller.js';
import { Router } from 'express';

const usuarioRouter = Router();

usuarioRouter.get('/usuarios', usuarioController.findAllUsuarioController);
usuarioRouter.get("/usuarios/:id", usuarioController.findUsuarioByIdController);
usuarioRouter.post('/usuarios', usuarioController.createUsuarioController);
usuarioRouter.put("/usuarios/:id", usuarioController.updateUsuarioController);
usuarioRouter.delete("/usuarios/:id", usuarioController.deleteUsuarioController);

export default usuarioRouter;