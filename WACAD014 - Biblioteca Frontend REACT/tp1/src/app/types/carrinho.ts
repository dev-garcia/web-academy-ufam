export interface FotoProduto {
  titulo: string;
  src: string;
}

export interface Produto {
  id: string;
  fotos: FotoProduto[];
  nome: string;
  preco: number;
  descricao: string;
  vendido: boolean;
  usuario_id: string;
}

export interface ItemCarrinho {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}
