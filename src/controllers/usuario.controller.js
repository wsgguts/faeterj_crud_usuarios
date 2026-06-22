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

async function findUsuarioByIdController(request, response) {
    const {id} = request.params;
    try {
        const usuario = await usuarioService.findUsuarioByIdService(id);
        response.status(200).send({usuario});
    }catch (error) {
        response.status(404).send(error.message);
    }
}

async function updateUsuarioController(request, response) {
    const {id} = request.params;
    const usuarioAtualizado = request.body;
    try {
        const usuario = await usuarioService.updateUsuarioService(id, usuarioAtualizado);
        response.status(200).send({usuario});
    }catch (error) {
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

async function deleteUsuarioController(request, response) {
    const {id} = request.params;
    try {
        const retorno = await usuarioService.deleteUsuarioService(id);
        response.status(200).send(retorno);
    }catch (error) {
        response.status(400).send(error.message);
    }
}


export default {
    findAllUsuarioController,
    createUsuarioController,
    findUsuarioByIdController,
    updateUsuarioController,
    deleteUsuarioController
}