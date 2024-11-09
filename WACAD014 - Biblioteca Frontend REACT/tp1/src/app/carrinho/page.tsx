"use client";

import { useState } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho";

import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinhos";
import { ItemCarrinho } from "../types/carrinho";

export default function CarrinhoPage() {
  const [itensCarrinho, setItensCarrinho] =
    useState<ItemCarrinho[]>(mockItensCarrinho);

  const removerItemDoCarrinho = (id: string) => {
    setItensCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  const quantidadeTotal = itensCarrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );
  const valorTotal = itensCarrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho
          quantidadeTotal={quantidadeTotal}
          valorTotal={valorTotal}
        />
        <ListagemCarrinho
          itens={itensCarrinho}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
      </div>
    </main>
  );
}
