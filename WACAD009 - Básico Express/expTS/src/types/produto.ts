export interface Produto {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
}

export interface CreateProdutoDto {
  nome: string;
  preco: number;
  estoque: number;
}
