import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";
import { useContext } from "react";
import { FavoritosContext } from "./FavoritosProvider";

export const useFavoritosContext = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error(
      "useFavoritosContext deve ser usado dentro do FavoritosProvider",
    );
  }
  return context;
};

export const useProdutoFavoritado = (id: string) => {
  const { favoritos } = useFavoritosContext();
  return (
    Array.isArray(favoritos) && favoritos.some((produto) => produto.id === id)
  );
};

export const useAdicionarFavorito = () => {
  const { adicionarFavorito } = useFavoritosContext();
  return adicionarFavorito;
};

export const useRemoverFavorito = () => {
  const { removerFavorito } = useFavoritosContext();
  return removerFavorito;
};

export const useValorTotalFavoritos = () => {
  const { favoritos } = useFavoritosContext();
  return favoritos.reduce(
    (total, produto) =>
      total +
      calculaValorComPorcentagemDeDesconto(
        Number(produto.preco),
        produto.desconto,
      ),
    0,
  );
};
