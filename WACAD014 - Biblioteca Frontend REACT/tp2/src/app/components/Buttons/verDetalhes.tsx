import { useRouter } from "next/navigation";

export default function CardProduto({
  produto,
  adicionarAoCarrinho,
}: CardProdutoProps) {
  const router = useRouter();

  const verDetalhes = () => {
    router.push(`/produto/${produto.id}`);
  };

  return (
    <button className="btn btn-light d-block w-100 mt-2" onClick={verDetalhes}>
      Ver detalhes
    </button>
  );
}
