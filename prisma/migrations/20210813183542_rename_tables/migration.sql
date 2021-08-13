/*
  Warnings:

  - You are about to drop the `Raca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sexo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Raca";

-- DropTable
DROP TABLE "Sexo";

-- CreateTable
CREATE TABLE "raca" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sexo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "raca.nome_unique" ON "raca"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "sexo.nome_unique" ON "sexo"("nome");
