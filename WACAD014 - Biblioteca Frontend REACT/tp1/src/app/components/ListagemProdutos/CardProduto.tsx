// src/app/components/ListagemProdutos/CardProduto.tsx
"use client";

import { Produto } from "@/app/types/carrinho";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

interface CardProdutoProps {
  produto: Produto;
  adicionarAoCarrinho: (produto: Produto) => void;
}

export default function CardProduto({
  produto,
  adicionarAoCarrinho,
}: CardProdutoProps) {
  const { mutate: favoritarProduto }: UseMutationResult<void, Error, void> =
    useMutation({
      mutationFn: async () => {
        await axios.post("https://api-de-favoritos/favoritos", {
          produtoId: produto.id,
        });
      },
      onSuccess: () => toast.success("Produto favoritado com sucesso!"),
      onError: () => toast.error("Erro ao favoritar o produto."),
    });

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          className="card-img-top"
          alt={produto.nome}
          width={300}
          height={320}
        />
        <div className="card-body bg-light">
          <h5 className="card-title">{produto.nome}</h5>

          <p className="card-text text-secondary">
            R$ {produto.preco ? Number(produto.preco).toFixed(2) : "0.00"}
          </p>

          <button
            className="btn btn-dark d-block w-100"
            onClick={() => adicionarAoCarrinho(produto)}
          >
            Adicionar no carrinho
          </button>
          <button
            className="btn btn-primary d-block w-100 mt-2"
            onClick={() => favoritarProduto()}
          >
            Favoritar
          </button>
        </div>
      </div>
    </div>
  );
}
