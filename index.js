import express from 'express';
import usuarioRouters from './src/01_routes/usuario.routes.js';

const app = express();

app.use(express.json());
app.use(usuarioRouters);

app.listen(3000, () => {
    console.log('Server is running on port 3000');  
});
