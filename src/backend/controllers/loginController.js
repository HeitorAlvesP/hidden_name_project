import { getDatabase } from '../database/configDB.js';

// Função para realizar o login
export const realizaLogin = async (req, res) => {
    const db = getDatabase();
    const { email, senha } = req.body;

    // Verificar se ambos os campos foram preenchidos
    if (!email || !senha) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
    }

    try {
        // Consulta para verificar se o usuário existe e se a senha está correta
        const user = await db.get(`SELECT * FROM User WHERE email = ? AND senha = ?`, [email, senha]);

        if (user) {
            // Login bem-sucedido
            res.status(200).json({ message: 'Login bem-sucedido!' });
            // Aqui você pode redirecionar ou configurar uma sessão, conforme necessário
        } else {
            // Login falhou: usuário não encontrado ou senha incorreta
            res.status(401).json({ message: 'Email ou senha incorretos.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar login', error });
    }
};