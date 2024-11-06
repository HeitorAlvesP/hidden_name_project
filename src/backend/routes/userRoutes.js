import express from 'express';
import { criarConta } from '../controllers/createUserController.js';
import { realizaLogin } from '../controllers/loginController.js';

const userRoutes = express.Router();

userRoutes.post('/criarConta', criarConta);
userRoutes.post('/login', realizaLogin);

export default userRoutes;