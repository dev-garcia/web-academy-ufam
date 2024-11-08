"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroNaoSalvoError = void 0;
const ErroBase_1 = require("./ErroBase");
class RegistroNaoSalvoError extends ErroBase_1.ErroBase {
    constructor(mensagem = "Registro não salvo na base de dados.") {
        super("RESTRICAO", mensagem, null);
    }
}
exports.RegistroNaoSalvoError = RegistroNaoSalvoError;
