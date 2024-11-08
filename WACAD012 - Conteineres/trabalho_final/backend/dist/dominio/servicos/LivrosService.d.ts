import { LivroDTO } from "../dto/LivroDTO";
import { LivroParaAtualizarDTO } from "../dto/LivroParaAtualizarDTO";
import { LivroParaCriarDTO } from "../dto/LivroParaCriarDTO";
import { Livro } from "../modelos/Livro";
import { LivrosRepository } from "../repositorios/LivrosRepository";
import { ObjectMapper } from "@/common/ObjectMapper";
declare class LivrosService {
    private repository;
    private livroMapper;
    private novoLivroMapper;
    constructor(repository: LivrosRepository, livroMapper: ObjectMapper<Livro, LivroDTO>, novoLivroMapper: ObjectMapper<LivroParaCriarDTO, Livro>);
    buscarTodos(): Promise<LivroDTO[]>;
    buscarLivroPorIsbn(isbn: string): Promise<LivroDTO>;
    cadastrarNovoLivro(novoLivro: LivroParaCriarDTO): Promise<LivroDTO>;
    atualizarLivro(isbn: string, dadosParaAtualizar: LivroParaAtualizarDTO): Promise<LivroDTO>;
    deletarLivro(isbn: string): Promise<boolean>;
}
export { LivrosService };
