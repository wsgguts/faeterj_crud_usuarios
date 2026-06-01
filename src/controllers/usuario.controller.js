import usuarioService from '../services/usuario.service.js';
import { response } from 'express';

async function findAllUsuarioController(request, response) {
    try {
        const usuarios = await usuarioService.findAllUsuarioService();
        response.status(200).send(usuarios);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function createUsuarioController(request, response) {
    const novoUsuario = request.body;
    try {
        const usuario = await usuarioService.createUsuarioService(novoUsuario);
        response.status(201).send(usuario);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

export default {
    findAllUsuarioController,
    createUsuarioController
}