"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";
import { Produto } from "./types/carrinho";

async function fetchProdutos(): Promise<Produto[]> {
  const { data } = await axios.get(
    "https://ranekapi.origamid.dev/json/api/produto",
  );
  return data;
}

export default function HomePage() {
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const [valorTotal, setValorTotal] = useState<number>(0);

  const { data: produtos = [] } = useQuery<Produto[]>({
    queryKey: ["produtos"],
    queryFn: fetchProdutos,
  });

  const adicionarAoCarrinho = (produto: Produto) => {
    setQuantidadeTotal((prev) => prev + 1);
    setValorTotal((prev) => prev + Number(produto.preco || 0));
  };

  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho
          quantidadeTotal={quantidadeTotal}
          valorTotal={valorTotal}
        />
        <h5 className="mb-3">Produtos disponíveis:</h5>
        <ListagemProdutos
          listaProdutos={produtos}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </main>
  );
}
