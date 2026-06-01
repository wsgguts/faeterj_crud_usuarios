import usuarioRepository from "../repositories/usuario.repository.js";

async function findAllUsuarioService() {
    const usuarios = await usuarioRepository.findAllUsuariosRepository();
    return usuarios;
}

async function createUsuarioService(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    if (!usuario) {
        throw new Error('Erro na criação do usuário');
    }
    return usuario;
}

export default {
    findAllUsuarioService,
    createUsuarioService
};