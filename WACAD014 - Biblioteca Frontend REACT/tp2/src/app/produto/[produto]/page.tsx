"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";

async function fetchDetalhesProduto(id: string) {
  const { data } = await axios.get(`https://api.example.com/produto/${id}`);
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
  if (isError) return <h5>Erro ao carregar produto.</h5>;

  return (
    <main className="container p-5">
      <h1>{data.nome}</h1>
      <Image src={data.fotos[0].src} alt={data.nome} width={400} height={300} />
      <p>R$ {data.preco.toFixed(2)}</p>
      <p>{data.descricao}</p>
    </main>
  );
}
