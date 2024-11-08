"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErroBase = void 0;
class ErroBase extends Error {
    constructor(tipo, mensagem, extras) {
        super(mensagem);
        this._tipo = tipo;
        this._mensagem = mensagem;
        this._extras = extras;
    }
    get tipo() {
        return this._tipo;
    }
    get mensagem() {
        return this._mensagem;
    }
    get extras() {
        return this._extras;
    }
}
exports.ErroBase = ErroBase;
