"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosController = void 0;
const Dotenv_1 = require("@/common/Dotenv");
const Logger_1 = require("@/common/Logger");
const RegistroNaoSalvoError_1 = require("@/dominio/excecoes/RegistroNaoSalvoError");
const LivroDTOMapper_1 = require("@/dominio/objectmapper/LivroDTOMapper");
const LivroParaCriarMapper_1 = require("@/dominio/objectmapper/LivroParaCriarMapper");
const LivrosService_1 = require("@/dominio/servicos/LivrosService");
const bd_1 = require("@/infraestrutura/bd");
const LivroEntityMapper_1 = require("@/infraestrutura/bd/LivroEntityMapper");
const PrismaLivrosRepository_1 = require("@/infraestrutura/repositorios/prisma/PrismaLivrosRepository");
Dotenv_1.Dotenv.carregarVariaveis();
class LivrosController {
    constructor() {
        this.service = new LivrosService_1.LivrosService(new PrismaLivrosRepository_1.PrismaLivrosRepository((0, bd_1.gerarConexaoBDPrisma)(), new LivroEntityMapper_1.LivroEntityMapper()), new LivroDTOMapper_1.LivroDTOMapper(), new LivroParaCriarMapper_1.LivroParaCriarMapper());
        this.logger = Logger_1.Logger.pegarInstancia();
    }
    async buscarTodos(req, res) {
        const livros = await this.service.buscarTodos();
        res.json(livros);
    }
    async buscarLivroPorIsbn(req, res, next) {
        try {
            const { isbn } = req.params;
            const livro = await this.service.buscarLivroPorIsbn(isbn);
            res.json(livro);
        }
        catch (erro) {
            this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
            next(erro);
        }
    }
    async cadastrarNovoLivro(req, res, next) {
        try {
            const novoLivro = req.body;
            const resultado = await this.service.cadastrarNovoLivro(novoLivro);
            if (!resultado)
                throw new RegistroNaoSalvoError_1.RegistroNaoSalvoError(`O livro com código ISBN ${novoLivro.isbn} não foi salvo no banco de dados.`);
            res.status(201).json(resultado);
        }
        catch (erro) {
            this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
            next(erro);
        }
    }
    async atualizarLivro(req, res, next) {
        try {
            const dadosParaAtualizar = req.body;
            const { isbn } = req.params;
            const resultado = await this.service.atualizarLivro(isbn, dadosParaAtualizar);
            if (!resultado)
                throw new RegistroNaoSalvoError_1.RegistroNaoSalvoError(`O livro com código ISBN ${isbn} não foi atualizado no banco de dados.`);
            res.json(resultado);
        }
        catch (erro) {
            this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
            next(erro);
        }
    }
    async deletarLivro(req, res, next) {
        try {
            const { isbn } = req.params;
            await this.service.deletarLivro(isbn);
            res.sendStatus(200);
        }
        catch (erro) {
            this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
            next(erro);
        }
    }
}
exports.LivrosController = LivrosController;
