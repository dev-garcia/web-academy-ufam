"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capturarExcecoes = void 0;
const ErroBase_1 = require("@/dominio/excecoes/ErroBase");
const ISBNUnicoError_1 = require("@/dominio/excecoes/ISBNUnicoError");
const RegistroNaoEncontradoError_1 = require("@/dominio/excecoes/RegistroNaoEncontradoError");
const RegistroNaoSalvoError_1 = require("@/dominio/excecoes/RegistroNaoSalvoError");
const ValidacaoError_1 = require("@/dominio/excecoes/ValidacaoError");
const capturarExcecoes = async (erro, req, res, next) => {
    let status = 500;
    let mensagem = erro.message;
    let tipo = "INTERNO";
    let extras = null;
    if (erro instanceof ErroBase_1.ErroBase) {
        tipo = erro.tipo;
        extras = erro.extras;
    }
    if (erro instanceof RegistroNaoEncontradoError_1.RegistroNaoEncontradoError) {
        status = 404;
    }
    else if (erro instanceof RegistroNaoSalvoError_1.RegistroNaoSalvoError ||
        erro instanceof ValidacaoError_1.ValidacaoError ||
        erro instanceof ISBNUnicoError_1.ISBNUnicoError) {
        status = 422;
    }
    else {
        status = 500;
    }
    res
        .status(status)
        .json({ status, tipo, mensagem, extras });
};
exports.capturarExcecoes = capturarExcecoes;
