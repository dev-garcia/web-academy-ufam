import express, { Request, Response } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
validateEnv();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT ?? 7777;

app.use(express.json());

app.get("/produto", async (req: Request, res: Response) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
  } catch (error) {
    console.error("Deu erroo", error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

app.get("/produto/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const produto = await prisma.produto.findUnique({
      where: { produto_id: Number(id) },
    });
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    console.error("Deu erroo", error);
    res.status(500).json({ error: "Erro ao buscar o produto" });
  }
});

app.post("/categoria", async (req: Request, res: Response) => {
  const { nome } = req.body;
  try {
    const novaCategoria = await prisma.categoria.create({
      data: { nome },
    });
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar categoria" });
  }
});

app.post("/subcategoria", async (req: Request, res: Response) => {
  const { nome, categoria_id } = req.body;
  try {
    const novaSubcategoria = await prisma.subcategoria.create({
      data: {
        nome,
        categoria_id,
      },
    });
    res.status(201).json(novaSubcategoria);
  } catch (error) {
    console.error("Deu erroo", error);
    res.status(500).json({ error: "Erro ao criar subcategoria" });
  }
});

app.post("/produto", async (req: Request, res: Response) => {
  const {
    modelo,
    fabricante,
    preco_base,
    qnt_disponivel,
    num_serie,
    subcategoria_id,
  } = req.body;

  try {
    const novoProduto = await prisma.produto.create({
      data: {
        modelo,
        fabricante,
        preco_base: parseFloat(preco_base),
        qnt_disponivel,
        num_serie,
        subcategoria_id,
      },
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    console.error("Deu erroo", error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
});

app.post("/compra", async (req: Request, res: Response) => {
  const {
    cliente_id,
    endereco_envio_id,
    produtos,
    forma_pagamento,
    desconto,
    total,
  } = req.body;

  try {
    const novaCompra = await prisma.compra.create({
      data: {
        cliente_id,
        endereco_envio_id,
        data_hora: new Date(),
        forma_pagamento,
        desconto: parseFloat(desconto),
        total: parseFloat(total),
        ProdutosComprados: {
          create: produtos.map((produto: any) => ({
            produto_id: produto.produto_id,
            quantidade: produto.quantidade,
            preco: parseFloat(produto.preco),
          })),
        },
      },
      include: {
        ProdutosComprados: true,
      },
    });

    res.status(201).json(novaCompra);
  } catch (error) {
    console.error("Deu erroo", error);
    res.status(500).json({ error: "Erro ao realizar a compra" });
  }
});

app.post("/cliente", async (req: Request, res: Response) => {
  const { nome_completo, cpf, celular, email, data_nascimento, enderecos } =
    req.body;

  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        nome_completo,
        cpf,
        celular,
        email,
        data_nascimento,
        Endereco: {
          create: enderecos.map((endereco: any) => ({
            rua: endereco.rua,
            numero: endereco.numero,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
          })),
        },
      },
      include: {
        Endereco: true,
      },
    });

    res.status(201).json(novoCliente);
  } catch (error) {
    if (error) {
      res.status(400).json({ error: "CPF já cadastrado!" });
    } else {
      console.error("Deu erroo", error);
      res.status(500).json({ error: "Erro ao criar cliente e endereços" });
    }
  }
});

app.put("/produto/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    modelo,
    fabricante,
    preco_base,
    qnt_disponivel,
    num_serie,
    subcategoria_id,
  } = req.body;

  try {
    const produtoExistente = await prisma.produto.findUnique({
      where: { produto_id: Number(id) },
    });

    if (!produtoExistente) {
      res.status(404).json({ error: "Produto não encontrado" });
    }

    const produtoAtualizado = await prisma.produto.update({
      where: { produto_id: Number(id) },
      data: {
        modelo,
        fabricante,
        preco_base: parseFloat(preco_base),
        qnt_disponivel,
        num_serie,
        subcategoria_id,
      },
    });
    res.status(200).json(produtoAtualizado);
  } catch (error) {
    console.error("Deu errooo", error);
    res.status(500).json({ error: "Erro ao atualizar o produto" });
  }
});

app.delete("/produto/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const produtoExistente = await prisma.produto.findUnique({
      where: { produto_id: Number(id) },
    });

    if (!produtoExistente) {
      res.status(404).json({ error: "Produto não encontrado" });
    }

    await prisma.produto.delete({
      where: { produto_id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error("Deu errooo", error);
    res.status(500).json({ error: "Erro ao deletar o produto" });
  }
});

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}`);
});
