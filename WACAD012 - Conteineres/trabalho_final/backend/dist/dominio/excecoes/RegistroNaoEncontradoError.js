"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroNaoEncontradoError = void 0;
const ErroBase_1 = require("./ErroBase");
class RegistroNaoEncontradoError extends ErroBase_1.ErroBase {
    constructor(mensagem = "Registro não encontrado.") {
        super("NAO_ENCONTRADO", mensagem, null);
    }
}
exports.RegistroNaoEncontradoError = RegistroNaoEncontradoError;
