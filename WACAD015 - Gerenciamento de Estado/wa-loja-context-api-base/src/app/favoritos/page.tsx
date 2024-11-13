"use client";

import { useContext } from "react";
import { FavoritosContext } from "../components/FavoritosProvider/FavoritosProvider";
import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";

export default function Favoritos() {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  return (
    <main>
      <div className="container p-5">
        <ListagemFavoritos
          produtosFavoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </div>
    </main>
  );
}
