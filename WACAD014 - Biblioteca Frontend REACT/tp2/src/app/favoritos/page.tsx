"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Produto } from "../types/carrinho";
import { apiFavoritos } from "../utils/api";

export async function getFavoritos(): Promise<Produto[]> {
  const { data } = await apiFavoritos.get<Produto[]>("/favoritos");
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
    queryFn: getFavoritos,
  });

  const { mutate: removerFavorito } = useMutation({
    mutationFn: async (id: string) => {
      await apiFavoritos.delete(`/favoritos/${id}`);
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
      <ul>
        {favoritos.map((produto) => (
          <li key={produto.id}>
            {produto.nome}
            <button onClick={() => removerFavorito(produto.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
