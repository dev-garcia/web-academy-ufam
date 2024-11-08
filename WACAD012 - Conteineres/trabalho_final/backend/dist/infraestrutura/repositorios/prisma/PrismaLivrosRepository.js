"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaLivrosRepository = void 0;
const RegistroNaoEncontradoError_1 = require("@/dominio/excecoes/RegistroNaoEncontradoError");
class PrismaLivrosRepository {
    constructor(conexao, mapper) {
        this.conexao = conexao;
        this.mapper = mapper;
    }
    async buscarPorIsbn(isbn) {
        const livro = await this.conexao.livro.findUnique({
            where: { isbn }
        });
        if (!livro)
            throw new RegistroNaoEncontradoError_1.RegistroNaoEncontradoError(`O livro com código ISBN ${isbn} não foi encontrado.`);
        return await this.mapper.mapear(livro);
    }
    async buscarTodos() {
        const livros = await this.conexao.livro.findMany();
        return await this.mapper.mapearLista(livros);
    }
    async buscarPorId(id) {
        const livro = await this.conexao.livro.findUnique({
            where: { id }
        });
        if (!livro)
            throw new RegistroNaoEncontradoError_1.RegistroNaoEncontradoError(`O livro de ID ${id} não foi encontrado.`);
        return await this.mapper.mapear(livro);
    }
    async existe(id) {
        const livro = await this.conexao.livro.findUnique({
            where: { id }
        });
        return !!livro;
    }
    async remover(id) {
        const livro = await this.conexao.livro.delete({
            where: { id }
        });
        return !!livro;
    }
    async salvar(livro) {
        await this.conexao.livro.upsert({
            create: {
                id: livro.id,
                nome: livro.nome,
                sinopse: livro.sinopse,
                isbn: livro.isbn,
                urlImagem: livro.urlImagem,
                autores: livro.autores
            },
            update: {
                nome: livro.nome,
                sinopse: livro.sinopse,
                urlImagem: livro.urlImagem,
                autores: livro.autores
            },
            where: {
                id: livro.id
            }
        });
    }
}
exports.PrismaLivrosRepository = PrismaLivrosRepository;
