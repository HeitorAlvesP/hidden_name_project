import { getDatabase } from '../database/configDB.js';

export const criarConta = async (req, res) => {
    const db = getDatabase(); 
    const { nome, cpf, dataNascimento, email, senha, confirmar_senha, tipoId } = req.body;
  
    if (!nome || !cpf || !dataNascimento || !email || !senha || !confirmar_senha || !tipoId) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
  
    if (senha !== confirmar_senha) {
      return res.status(400).json({ message: 'As senhas não correspondem.' });
    }
  
    try {
      // Insira a lógica para criar o usuário no banco de dados
      const result = await db.run(
        `INSERT INTO User (cpf, nome, dataNascimento, email, senha, tipoId) VALUES (?, ?, ?, ?, ?, ?)`,
        [cpf, nome, dataNascimento, email, senha, tipoId]
      );
  
      res.status(201).json({ id: result.lastID, message: 'Conta criada com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar conta', error });
    }
  };