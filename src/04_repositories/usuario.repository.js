//Só ele faz queries SQL. O resto do projeto não precisa saber como o banco funciona.

import db from '../05_config/database.js';

db.run(`
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    foto TEXT
);`);

function findAllUsuariosRepository() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM usuarios',[], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
}

function createUsuarioRepository(novoUsuario) {
    return new Promise((resolve, reject) => {
        const { 
            login, 
            email, 
            senha, 
            foto 
        } = novoUsuario;
        db.run(
            `INSERT INTO usuarios (login, email, senha, foto)
            VALUES (?, ?, ?, ?)`,
            [login, email, senha,foto],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ 
                        id: this.lastID 
                    });
                }
            }
        );
    });
}

export default {
    findAllUsuariosRepository,
    createUsuarioRepository
};  