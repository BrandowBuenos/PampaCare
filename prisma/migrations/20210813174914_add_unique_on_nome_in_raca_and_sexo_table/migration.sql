/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Raca` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `Sexo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Raca.nome_unique" ON "Raca"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Sexo.nome_unique" ON "Sexo"("nome");
