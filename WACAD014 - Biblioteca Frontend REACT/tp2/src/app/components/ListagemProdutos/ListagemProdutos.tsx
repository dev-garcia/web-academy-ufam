"use client";

import { Produto } from "@/app/types/carrinho";
import CardProduto from "./CardProduto";
import { useListaProdutos } from "./hooks/useListaProdutos";

interface IListagemProdutosProps {
  adicionarAoCarrinho: (produto: Produto) => void;
}

export default function ListagemProdutos({
  adicionarAoCarrinho,
}: IListagemProdutosProps) {
  const { produtos, isFetching, isError } = useListaProdutos();

  if (isFetching) return <h5>Carregando produtos...</h5>; // Agora usa isFetching
  if (isError) return <h5>Erro ao carregar produtos.</h5>;

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
    </>
  );
}
