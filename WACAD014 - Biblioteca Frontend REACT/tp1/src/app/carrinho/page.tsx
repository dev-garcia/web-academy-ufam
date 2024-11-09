"use client";

import { useState } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";
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
    0,
  );
  const valorTotal = itensCarrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0,
  );

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho
          itens={itensCarrinho}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
          <ResumoCarrinho
          quantidadeTotal={quantidadeTotal}
          valorTotal={valorTotal}
        />
      </div>
    </main>
  );
}
