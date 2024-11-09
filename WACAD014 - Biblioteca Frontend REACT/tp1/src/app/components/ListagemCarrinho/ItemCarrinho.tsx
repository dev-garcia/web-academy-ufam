import { ItemCarrinho as ItemCarrinhoType } from "../../types/carrinho";

interface ItemCarrinhoProps {
  item: ItemCarrinhoType;
  removerItemDoCarrinho: (id: string) => void;
}

export default function ItemCarrinho({
  item,
  removerItemDoCarrinho,
}: ItemCarrinhoProps) {
  return (
    <tr>
      <td>{item.nome}</td>
      <td>R$ {item.preco.toFixed(2)}</td>
      <td>{item.quantidade}</td>
      <td>R$ {(item.preco * item.quantidade).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removerItemDoCarrinho(item.id)}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
