"use client";
import React from "react";
import ResumoCarrinho from "./components/ResumoCarrinho";
import ListagemCarrinho from "./components/ListagemCarrinho/ListagemCarrinho";

export default function Produtos() {
  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho />
          <h5 className="mb-3">Produtos disponíveis:</h5>

          <ListagemCarrinho />
        </div>
      </main>
    </>
  );
}
