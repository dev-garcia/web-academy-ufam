"use client";
import React, { useState } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";

export default function Carrinho() {
  const [totalCompra, setTotalCompra] = useState(0);
  const [qntTotalItens, setQntTotalItens] = useState(0);

  return (
    <>
      <main className="container ">
        <ListagemCarrinho />

        <ResumoCarrinho />
      </main>
    </>
  );
}
