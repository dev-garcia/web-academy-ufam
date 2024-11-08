"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const ValidadorLivro_1 = require("../validacoes/ValidadorLivro");
class Livro {
    constructor(params) {
        this.validar(params);
        this._id = params.id;
        this._nome = params.nome;
        this._sinopse = params.sinopse;
        this._isbn = params.isbn;
        this._urlImagem = params.urlImagem;
        this._autores = params.autores;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get sinopse() {
        return this._sinopse;
    }
    set sinopse(novaSinopse) {
        this._sinopse = novaSinopse;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(novoIsbn) {
        this._isbn = novoIsbn;
    }
    get urlImagem() {
        return this._urlImagem;
    }
    set urlImagem(novaUrlImagem) {
        this._urlImagem = novaUrlImagem;
    }
    get autores() {
        return this._autores;
    }
    set autores(novosAutores) {
        this._autores = novosAutores;
    }
    validar(params) {
        const validador = ValidadorLivro_1.ValidadorLivro.instanciar();
        validador
            .nome(params.nome)
            .sinopse(params.sinopse)
            .isbn(params.isbn)
            .urlImagem(params.urlImagem)
            .autores(params.autores);
    }
}
exports.Livro = Livro;
