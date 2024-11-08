"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorLivro = void 0;
const ValidacaoError_1 = require("../excecoes/ValidacaoError");
class ValidadorLivro {
    constructor() { }
    nome(valor) {
        if (!valor)
            throw new ValidacaoError_1.ValidacaoError("O nome do livro não pode estar em branco.", { valor });
        if (valor.length < 20 || valor.length > 180)
            throw new ValidacaoError_1.ValidacaoError("O nome do livro deve ter entre 20 e 180 caracteres.", { valor });
        return this;
    }
    sinopse(valor) {
        if (!valor || valor.length === 0)
            throw new ValidacaoError_1.ValidacaoError("A sinopse o livro não pode estar em branco.", { valor });
        return this;
    }
    isbn(valor) {
        if (!valor || valor.length === 0)
            throw new ValidacaoError_1.ValidacaoError("O código ISBN do livro não pode estar em branco.", { valor });
        if (valor.length !== 13)
            throw new ValidacaoError_1.ValidacaoError("O código ISBN deve ser formado por 13 caracteres.", { valor });
        return this;
    }
    urlImagem(valor) {
        const regex = /^((https?:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w\.-]+)(?::(\d+))?)?([\/\\\w\.()-]*)?(?:([?][^#]*)?(#.*)?)*/gmi;
        if (valor && !regex.test(valor))
            throw new ValidacaoError_1.ValidacaoError("A URL da imagem deve ser uma URL válida.", { valor });
        return this;
    }
    autores(valor) {
        if (!valor || valor.length === 0)
            throw new ValidacaoError_1.ValidacaoError("O livro deve ter pelo menos um autor.", { valor });
        for (let val of valor)
            if (val.length === 0 || val.trim().length === 0)
                throw new ValidacaoError_1.ValidacaoError("Existe um nome de autor do livro em branco.", { valorEncontrado: val });
        return this;
    }
    static instanciar() {
        return new ValidadorLivro();
    }
}
exports.ValidadorLivro = ValidadorLivro;
