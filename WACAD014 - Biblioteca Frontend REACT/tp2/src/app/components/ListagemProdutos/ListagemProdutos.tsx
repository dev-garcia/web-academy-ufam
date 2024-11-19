"use client";

import { Produto } from "@/app/types/carrinho";
import CardProduto from "./CardProduto";
import { useListaProdutos } from "./hooks/useListaProdutos";

interface IListagemProdutosProps {
  adicionarAoCarrinho: (produto: Produto) => void;
  listaProdutos: Produto[];
}

export default function ListagemProdutos({
  listaProdutos,
  adicionarAoCarrinho,
}: IListagemProdutosProps) {
  const { isFetching, isError } = useListaProdutos();

  if (isFetching) return <h5>Carregando produtos...</h5>;
  if (isError) return <h5>Erro ao carregar produtos.</h5>;

  try {
  } catch (error) {
    console.error(error);
    return <h5>Erro ao carregar produtos.</h5>;
  }

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {listaProdutos.map((produto) => (
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
