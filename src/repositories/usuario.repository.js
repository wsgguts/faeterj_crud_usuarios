import db from '../config/database.js';

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

function findUsuarioByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT
             * 
            FROM usuarios 
            WHERE id = ?`,
            [id],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        );
    })
}

function updateUsuarioRepository(id, usuario) {
    return new Promise((resolve, reject) => {
        const {
            login,
            email,
            senha,
            foto
        } = usuario;
        db.run(
            `UPDATE usuarios
            SET login = ?,
                email = ?,
                senha = ?,
                foto = ?
            WHERE id = ?`,
            [login, email, senha,foto, id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...usuario
                    });
                }
            }
        )
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
            [login, email, senha, foto],
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

function deleteUsuarioRepository(id) {
    return new Promise((resolve, reject) => {
            db.run(
                `DELETE FROM usuarios
                WHERE id = ?`,
                [id],
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({
                            message: "Usuario excluído com sucesso."
                        });
                    }
                }
            );
        }
    );
}


export default {
    findAllUsuariosRepository,
    createUsuarioRepository,
    findUsuarioByIdRepository,
    updateUsuarioRepository,
    deleteUsuarioRepository
};  