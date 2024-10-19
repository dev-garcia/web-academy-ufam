-- CreateTable
CREATE TABLE `Cliente` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `data_nascimento` VARCHAR(191) NULL,

    UNIQUE INDEX `Cliente_cpf_key`(`cpf`),
    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `endereco_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `cliente_id` INTEGER NULL,

    PRIMARY KEY (`endereco_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `categoria_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`categoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `subcategoria_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `categoria_id` INTEGER NULL,

    PRIMARY KEY (`subcategoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `produto_id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(191) NOT NULL,
    `fabricante` VARCHAR(191) NULL,
    `preco_base` DECIMAL(10, 2) NOT NULL,
    `qnt_disponivel` INTEGER NOT NULL,
    `num_serie` VARCHAR(191) NULL,
    `subcategoria_id` INTEGER NULL,

    PRIMARY KEY (`produto_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `compra_id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_hora` DATETIME(3) NOT NULL,
    `desconto` DECIMAL(10, 2) NULL,
    `forma_pagamento` VARCHAR(191) NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `cliente_id` INTEGER NULL,
    `endereco_envio_id` INTEGER NULL,

    PRIMARY KEY (`compra_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProdutosComprados` (
    `compra_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `preco` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`compra_id`, `produto_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`cliente_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`categoria_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_subcategoria_id_fkey` FOREIGN KEY (`subcategoria_id`) REFERENCES `Subcategoria`(`subcategoria_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`cliente_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_endereco_envio_id_fkey` FOREIGN KEY (`endereco_envio_id`) REFERENCES `Endereco`(`endereco_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutosComprados` ADD CONSTRAINT `ProdutosComprados_compra_id_fkey` FOREIGN KEY (`compra_id`) REFERENCES `Compra`(`compra_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutosComprados` ADD CONSTRAINT `ProdutosComprados_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produto`(`produto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
