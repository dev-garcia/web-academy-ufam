"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode } from "react";

interface FavoritosProviderProps {
  children: ReactNode;
}

interface IFavoritosContext {
  favoritos: Produto[];
  adicionarFavorito: (produto: Produto) => void;
  removerFavorito: (id: string) => void;
}

export const FavoritosContext = createContext<IFavoritosContext | null>(null);

const fetchFavoritos = async (): Promise<Produto[]> => {
  const response = await axios.get("http://localhost:3001/favoritos");
  return response.data;
};

const addFavorito = async (produto: Produto) => {
  await axios.post("http://localhost:3001/favoritos", produto);
};

const removeFavorito = async (id: string) => {
  await axios.delete(`http://localhost:3001/favoritos/${id}`);
};

const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const queryClient = useQueryClient();
  const { data } = useQuery<Produto[]>({
    queryKey: ["favoritos"],
    queryFn: fetchFavoritos,
  });

  const favoritos = data || [];

  const mutationAdd = useMutation({
    mutationFn: addFavorito,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favoritos"] }),
  });

  const mutationRemove = useMutation({
    mutationFn: removeFavorito,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favoritos"] }),
  });

  const adicionarFavorito = (produto: Produto) => {
    mutationAdd.mutate(produto);
  };

  const removerFavorito = (id: string) => {
    mutationRemove.mutate(id);
  };

  const value: IFavoritosContext = {
    favoritos,
    adicionarFavorito,
    removerFavorito,
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
