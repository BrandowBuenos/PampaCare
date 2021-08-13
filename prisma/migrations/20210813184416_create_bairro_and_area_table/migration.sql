-- CreateTable
CREATE TABLE "bairro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "area" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bairro.nome_unique" ON "bairro"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "area.nome_unique" ON "area"("nome");
