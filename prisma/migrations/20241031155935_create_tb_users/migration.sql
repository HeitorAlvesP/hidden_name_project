-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "confirmarSenha" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,
    CONSTRAINT "User_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "Tipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tipo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
