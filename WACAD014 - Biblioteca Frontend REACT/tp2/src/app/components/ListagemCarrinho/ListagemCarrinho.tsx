"use client";

import { ItemCarrinho as ItemCarrinhoType } from "../../types/carrinho";
import ItemCarrinho from "./ItemCarrinho";

interface ListagemCarrinhoProps {
  itens: ItemCarrinhoType[];
  removerItemDoCarrinho: (id: string) => void;
}

export default function ListagemCarrinho({
  itens,
  removerItemDoCarrinho,
}: ListagemCarrinhoProps) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor Unitário</th>
            <th>Quantidade</th>
            <th>Valor Total</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <ItemCarrinho
              key={item.id}
              item={item}
              removerItemDoCarrinho={removerItemDoCarrinho}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
