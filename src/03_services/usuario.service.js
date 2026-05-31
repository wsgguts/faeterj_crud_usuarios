//Aqui ficam as regras de negócio. Exemplo: "retorna todos os usuários", validações, cálculos. Ele não sabe nada de HTTP.

import usuarioRepository from "../04_repositories/usuario.repository.js";

async function findAllUsuarioService() {
    const usuarios = await usuarioRepository.findAllUsuariosRepository();
    return usuarios;
}

async function createUsuarioService(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    if (!usuario) {
        throw new Error('Erro ao criar usuário');
    }
    return usuario;
}

export default {
    findAllUsuarioService,
    createUsuarioService
};