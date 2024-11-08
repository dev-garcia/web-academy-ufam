"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroDTOMapper = void 0;
const ObjectMapper_1 = require("@/common/ObjectMapper");
class LivroDTOMapper extends ObjectMapper_1.ObjectMapper {
    constructor() {
        super();
    }
    async mapear(modelo) {
        return {
            nome: modelo.nome,
            sinopse: modelo.sinopse,
            isbn: modelo.isbn,
            urlImagem: modelo.urlImagem,
            autores: modelo.autores
        };
    }
}
exports.LivroDTOMapper = LivroDTOMapper;
