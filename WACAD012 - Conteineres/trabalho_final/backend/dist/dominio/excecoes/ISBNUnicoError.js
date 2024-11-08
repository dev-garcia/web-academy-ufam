"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISBNUnicoError = void 0;
const ErroBase_1 = require("./ErroBase");
class ISBNUnicoError extends ErroBase_1.ErroBase {
    constructor(mensagem = "ISBN repetido.") {
        super("RESTRICAO", mensagem, null);
    }
}
exports.ISBNUnicoError = ISBNUnicoError;
