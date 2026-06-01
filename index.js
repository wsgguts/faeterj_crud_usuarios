import express from 'express';
import usuarioRouters from './src/routes/usuario.routes.js';

const app = express();

app.use(express.json());
app.use(usuarioRouters);

app.listen(3000, () => {
    console.log('API iniciada com sucesso. Aguardando requisições na porta 3000.');  
});
