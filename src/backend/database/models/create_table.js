import sqlite3 from 'sqlite3';

export async function criar_tabelas(db){
  await db.exec(`
      CREATE TABLE Tipo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo TEXT NOT NULL
      );

      CREATE TABLE User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cpf TEXT UNIQUE NOT NULL,
        nome TEXT NOT NULL,
        dataNascimento TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        tipoId INTEGER,
        FOREIGN KEY (tipoId) REFERENCES Tipo(id)
      );

    `)
}

export async function insertDados(db) {
  await db.exec(`
      INSERT INTO Tipo (id, tipo) VALUES (1, 'administrador');
      INSERT INTO Tipo (id, tipo) VALUES (2, 'entregador');
      INSERT INTO Tipo (id, tipo) VALUES (3, 'estabelecimento');
    `)
}