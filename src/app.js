import dotenv from 'dotenv';
import express from 'express';
import userRoutes  from './backend/routes/userRoutes.js'
import { startServer } from './backend/database/configDB.js';

dotenv.config();
const app = express()

app.use(express.static('./src/frontend'));
app.use(express.json())

app.use('/api/users', userRoutes);


startServer().catch(err => console.error('Erro ao iniciar o servidor:', err));
app.listen(3000, () => console.log('API RODANDO EM PORT 3000'));