import usuarioController from '../controllers/usuario.controller.js';
import { Router } from 'express';

const usuarioRouter = Router();

usuarioRouter.get('/usuarios', usuarioController.findAllUsuarioController);
usuarioRouter.post('/usuarios', usuarioController.createUsuarioController);

export default usuarioRouter;