//Ele só recebe a requisição e passa para o controller certo. Não faz nada sozinho.

import usuarioController from '../02_controllers/usuario.controller.js';
import { Router } from 'express';

const usuarioRouter = Router();

usuarioRouter.get('/usuarios', usuarioController.findAllUsuarioController);
usuarioRouter.post('/usuarios', usuarioController.createUsuarioController);

export default usuarioRouter;