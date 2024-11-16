"use client";

import { Produto } from "@/app/types/carrinho";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function getListaProduto() {
  const { data } = await axios.get<Produto[]>(
    "https://api.example.com/produto",
  );
  return data;
}

export function useListaProdutos() {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["listaProdutos"],
    queryFn: getListaProduto,
  });

  return {
    produtos: data || [],
    isLoading,
    isError,
    isFetching,
  };
}
