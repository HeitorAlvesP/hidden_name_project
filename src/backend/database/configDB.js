import dotenv from 'dotenv';
import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { criar_tabelas } from './models/create_table.js';

dotenv.config();

const DB_PATH = process.env.DATABASE_URL;

export const initializeDatabase = async () => {
  const dbExists = fs.existsSync(DB_PATH);

  const db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database
  });

  if (!dbExists) {
    await criar_tabelas(db);
    console.log('Banco de dados criado e tabelas inicializadas.');
  } else {
    console.log('Conectado ao banco de dados existente.');
  }

  return db;

};

let dbConnection;

export const startServer = async () => {
  dbConnection = await initializeDatabase(); 
  console.log('Banco de dados aberto com sucesso.');
};

export const getDatabase = () => dbConnection;
