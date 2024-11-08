"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacaoError = void 0;
const ErroBase_1 = require("./ErroBase");
class ValidacaoError extends ErroBase_1.ErroBase {
    constructor(mensagem, extras) {
        super("VALIDACAO", mensagem, extras);
    }
}
exports.ValidacaoError = ValidacaoError;
