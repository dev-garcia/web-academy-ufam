"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosService = void 0;
class LivrosService {
    constructor(repository, livroMapper, novoLivroMapper) {
        this.repository = repository;
        this.livroMapper = livroMapper;
        this.novoLivroMapper = novoLivroMapper;
    }
    async buscarTodos() {
        const livros = await this.repository.buscarTodos();
        return await this.livroMapper.mapearLista(livros);
    }
    async buscarLivroPorIsbn(isbn) {
        const livro = await this.repository.buscarPorIsbn(isbn);
        return await this.livroMapper.mapear(livro);
    }
    async cadastrarNovoLivro(novoLivro) {
        const livro = await this.novoLivroMapper.mapear(novoLivro);
        await this.repository.salvar(livro);
        return await this.livroMapper.mapear(livro);
    }
    async atualizarLivro(isbn, dadosParaAtualizar) {
        const livro = await this.repository.buscarPorIsbn(isbn);
        livro.nome = dadosParaAtualizar.nome;
        livro.sinopse = dadosParaAtualizar.sinopse;
        livro.autores = dadosParaAtualizar.autores;
        livro.urlImagem = dadosParaAtualizar.urlImagem;
        await this.repository.salvar(livro);
        return await this.livroMapper.mapear(livro);
    }
    async deletarLivro(isbn) {
        const livro = await this.repository.buscarPorIsbn(isbn);
        const resultado = await this.repository.remover(livro.id);
        return resultado === 1;
    }
}
exports.LivrosService = LivrosService;
