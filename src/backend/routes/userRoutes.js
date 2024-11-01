import express from 'express';
import { criarConta } from '../controllers/createUserController.js';

const userRoutes = express.Router();

userRoutes.post('/criarConta', criarConta);

export default userRoutes;