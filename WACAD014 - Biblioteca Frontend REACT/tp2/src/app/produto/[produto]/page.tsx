"use client";

import { apiProdutos } from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

async function fetchDetalhesProduto(id: string) {
  const { data } = await apiProdutos.get(`/produto/${id}`);
  return data;
}

export default function Produto() {
  const { produto } = useParams();
  const produtoId = Array.isArray(produto) ? produto[0] : produto;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["detalhesProduto", produtoId],
    queryFn: () => fetchDetalhesProduto(produtoId),
    enabled: !!produtoId,
  });

  if (isLoading) return <h5>Carregando detalhes do produto...</h5>;
  if (isError) return <h5>Erro ao carregar detalhes do produto.</h5>;

  if (!data) return <h5>Produto não encontrado.</h5>;

  return (
    <main className="container p-5">
      <h1>{data.nome}</h1>
      <Image
        src={data.fotos[0]?.src}
        alt={data.nome}
        width={300}
        height={200}
      />
      <p>R$ {Number(data.preco).toFixed(2)}</p>
      <p>{data.descricao}</p>
    </main>
  );
}
