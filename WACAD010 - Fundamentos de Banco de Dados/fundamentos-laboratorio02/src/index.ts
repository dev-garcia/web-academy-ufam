import express from "express";
import validateEnv from "./utils/validateEnv";
import { PrismaClient } from "@prisma/client";

validateEnv();
const app = express();
const PORT = process.env.PORT ?? 3333;

const prisma = new PrismaClient();

async function cadastrarCliente() {
  const cpf = "000.000.000-00";

  const clienteExistente = await prisma.cliente.findUnique({
    where: { cpf },
    include: {
      Endereco: true,
    },
  });

  if (clienteExistente) {
    console.log("Cliente já cadastrado!");
    return clienteExistente;
  }

  const cliente = await prisma.cliente.create({
    data: {
      nome_completo: "Cristian Garcia",
      cpf,
      celular: "92986032632",
      email: "cristian.garcia@icomp.ufam.edu.br",
      data_nascimento: "2001-05-02",
      Endereco: {
        create: {
          rua: "Rua A",
          numero: 100,
          cidade: "Manaus",
          estado: "AM",
          cep: "69000-000",
        },
      },
    },
    include: {
      Endereco: true,
    },
  });
  console.log("Cliente e endereço cadastrados.");
  return cliente;
}

async function cadastrarProduto() {
  const numSerie = "WASD";

  const produtoExistente = await prisma.produto.findFirst({
    where: { num_serie: numSerie },
  });

  if (produtoExistente) {
    console.log("Produto já cadastrado!");
    return produtoExistente;
  }

  // Se o produto não existir, cria um novo
  const produto = await prisma.produto.create({
    data: {
      modelo: "Alienware",
      fabricante: "Dell",
      preco_base: 100.0,
      qnt_disponivel: 50,
      num_serie: numSerie,
      Subcategoria: {
        create: {
          nome: "Notebook",
          Categoria: {
            create: {
              nome: "Eletrônicos",
            },
          },
        },
      },
    },
    include: {
      Subcategoria: {
        include: {
          Categoria: true,
        },
      },
    },
  });
  console.log("Produto cadastrado com categoria e subcategoria");
  return produto;
}

async function registrarCompra(
  clienteId: number,
  produtoId: number,
  enderecoId: number
) {
  const compraExistente = await prisma.compra.findFirst({
    where: {
      cliente_id: clienteId,
      ProdutosComprados: {
        some: {
          produto_id: produtoId,
        },
      },
    },
  });

  if (compraExistente) {
    console.log("Compra já realizada!");
    return compraExistente;
  }

  const compra = await prisma.compra.create({
    data: {
      data_hora: new Date(),
      desconto: 10.0,
      forma_pagamento: "Cartão",
      total: 90.0,
      cliente_id: clienteId,
      endereco_envio_id: enderecoId,
      ProdutosComprados: {
        create: {
          produto_id: produtoId,
          quantidade: 1,
          preco: 90.0,
        },
      },
    },
    include: {
      ProdutosComprados: true,
    },
  });
  console.log("Compra registrada");
  return compra;
}

async function cadastrarTudo() {
  try {
    const cliente = await cadastrarCliente();
    const produto = await cadastrarProduto();
    const enderecoId = cliente.Endereco[0].endereco_id;

    await registrarCompra(cliente.cliente_id, produto.produto_id, enderecoId);
    console.log("Tudo cadastrado!");
  } catch (error) {
    console.error("Opa, deu erro!");
  } finally {
    await prisma.$disconnect();
  }
}

cadastrarTudo();

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}.`);
});
