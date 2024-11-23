import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";
import Image from "next/image";
import {
  useAdicionarFavorito,
  useProdutoFavoritado,
} from "../FavoritosProvider/useFavoritosContext";

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {
  const isFavorito = useProdutoFavoritado(produto.id);
  const adicionarFavorito = useAdicionarFavorito();

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          className="card-img-top"
          alt={produto.fotos[0].titulo}
          width={150}
          height={180}
        />

        <div className="card-body bg-ligth">
          <span className="badge text-bg-success text-white mb-2 ">
            {produto.desconto}% de desconto
          </span>

          <h5 className="card-title fw-bold">{produto.nome}</h5>
          <span className="text-secondary">De R$ {produto.preco}</span>
          <h5 className="card-text">
            Por R${" "}
            {calculaValorComPorcentagemDeDesconto(
              Number(produto.preco),
              produto.desconto,
            )}
          </h5>

          <button
            onClick={() => adicionarFavorito(produto)}
            className={isFavorito ? "btn btn-success" : "btn btn-secondary"}
            disabled={isFavorito}
          >
            {isFavorito ? "Favoritado" : "Favoritar"}
          </button>
        </div>
      </div>
    </div>
  );
}
