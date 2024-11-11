import { getDatabase } from '../database/configDB.js';
import { validarCPF } from '../validation/validaçãoCPF.js';

export const criarConta = async (req, res) => {
    const db = getDatabase(); 
    let { nome, cpf, dataNascimento, email, senha, confirmar_senha, tipoId } = req.body;

    console.log(req.body);
  
    if (!nome || !cpf || !dataNascimento || !email || !senha || !confirmar_senha || !tipoId) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
  
    if (senha !== confirmar_senha) {
      return res.status(400).json({ message: 'As senhas não correspondem.' });
    }

    if (!validarCPF(cpf)) {
      return res.status(400).json({ message: 'CPF inválido.' });
    }

    cpf = cpf.replace(/\D/g, '');
  
    try {

      const existingUser = await db.get(`SELECT cpf FROM User WHERE cpf = ?`, [cpf]);
      if (existingUser) {
         return res.status(400).json({ message: 'CPF já cadastrado.' });
      }

      const existingUserByEmail = await db.get(`SELECT email FROM User WHERE email = ?`, [email]);
      if (existingUserByEmail) {
         return res.status(400).json({ message: 'Email já cadastrado.' });
      }
      
      const nascimento = new Date(dataNascimento);
      const hoje = new Date();
      const diffTime = hoje - nascimento; 
      const diffDays = diffTime / (1000 * 3600 * 24); 

      if (diffDays < 2) {
        return res.status(400).json({ message: 'Data de nascimento invalida.' });
      }

      cpf = cpf.replace(/\D/g, '');
      const result = await db.run(
        `INSERT INTO User (cpf, nome, dataNascimento, email, senha, tipoId) VALUES (?, ?, ?, ?, ?, ?)`,
        [cpf, nome, dataNascimento, email, senha, tipoId]
      );
      
      res.json({ success: true });

    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar conta', error });
    }
  };