"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import ListagemProdutos from "../components/ListagemProdutos/ListagemProdutos";
import { Produto } from "../types/carrinho";

async function fetchFavoritos(): Promise<Produto[]> {
  const { data } = await axios.get("https://xxx-xxx-xx.glitch.me/favoritos");
  return data;
}

export default function FavoritosPage() {
  const queryClient = useQueryClient();

  const {
    data: favoritos = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["favoritos"],
    queryFn: fetchFavoritos,
  });

  const { mutate: removerFavorito } = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`https://xxx-xxx-xx.glitch.me/favoritos/${id}`);
    },
    onSuccess: () => {
      toast.success("Favorito removido com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["favoritos"] });
    },
    onError: () => toast.error("Erro ao remover favorito."),
  });

  if (isLoading) return <p>Carregando favoritos...</p>;
  if (isError) return <p>Erro ao carregar favoritos.</p>;

  return (
    <main className="container p-5">
      <h1 className="mb-4">Meus Favoritos</h1>
      <ListagemProdutos
        produtos={favoritos}
        adicionarAoCarrinho={() => {}}
        removerItem={(id: string) => removerFavorito(id)}
      />
    </main>
  );
}
