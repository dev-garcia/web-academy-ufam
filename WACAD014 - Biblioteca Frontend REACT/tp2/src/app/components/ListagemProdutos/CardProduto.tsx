"use client";

import { Produto } from "@/app/types/carrinho";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CardProdutoProps {
  produto: Produto;
  adicionarAoCarrinho: (produto: Produto) => void;
}

export default function CardProduto({
  produto,
  adicionarAoCarrinho,
}: CardProdutoProps) {
  const router = useRouter();

  const { mutate: favoritarProduto } = useMutation({
    mutationFn: async () =>
      axios.post("https://api.example.com/favoritos", produto),
    onSuccess: () => toast.success("Produto favoritado!"),
    onError: () => toast.error("Erro ao favoritar."),
  });

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          alt={produto.nome}
          className="card-img-top"
        />
        <div className="card-body">
          <h5>{produto.nome}</h5>
          <p>R$ {Number(produto.preco || 0).toFixed(2)}</p>
          <button
            className="btn btn-dark"
            onClick={() => adicionarAoCarrinho(produto)}
          >
            Adicionar ao carrinho
          </button>
          <button
            className="btn btn-primary mt-2"
            onClick={() => favoritarProduto()}
          >
            Favoritar
          </button>
          <button
            className="btn btn-light mt-2"
            onClick={() => router.push(`/produto/${produto.id}`)}
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
