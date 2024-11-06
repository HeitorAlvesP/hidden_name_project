import express from 'express';
import { criarConta } from '../controllers/createUserController.js';

const userRoutes = express.Router();

userRoutes.post('/criarConta', criarConta);
userRoutes.get('/login', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'frontend', 'html', 'login.html'));
});

export default userRoutes;