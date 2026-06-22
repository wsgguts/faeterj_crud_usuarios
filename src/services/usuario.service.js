import usuarioRepository from "../repositories/usuario.repository.js";

async function findAllUsuarioService() {
    const usuarios = await usuarioRepository.findAllUsuariosRepository();
    return usuarios;
}

async function findUsuarioByIdService(id){
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id)
    if (!usuario) {
        throw new Error("Usuario não encontrado!");
    }
    return usuario;
}

async function updateUsuarioService(id, usuarioAtualizado){
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id)
    if (!usuario) {
        throw new Error("Usuario não encontrado!");
    }
    const usuarioRetorno = await usuarioRepository.updateUsuarioRepository(id, usuarioAtualizado)
    if (!usuarioRetorno) {
        throw new Error("Erro ao atualizar o usuario!");
    } 
    return usuarioRetorno;
}

async function createUsuarioService(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    if (!usuario) {
        throw new Error('Erro na criação do usuário');
    }
    return usuario;
}

async function deleteUsuarioService(id){
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id)
    if (!usuario) {
        throw new Error("Usuario não encontrado!");
    }
    const mensagemRetorno = await usuarioRepository.deleteUsuarioRepository(id)
    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar o usuario!");
    } 
    return mensagemRetorno;
}


export default {
    findAllUsuarioService,
    createUsuarioService,
    findUsuarioByIdService,
    updateUsuarioService,
    deleteUsuarioService
};