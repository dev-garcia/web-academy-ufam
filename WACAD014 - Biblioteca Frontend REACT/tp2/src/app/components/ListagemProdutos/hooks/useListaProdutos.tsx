import { Produto } from "@/app/types/carrinho";
import { apiProdutos } from "@/app/utils/api";

import { useQuery } from "@tanstack/react-query";

export async function getListaProduto() {
  const { data } = await apiProdutos.get<Produto[]>("/produto");
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
