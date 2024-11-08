"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroEntityMapper = void 0;
const ObjectMapper_1 = require("@/common/ObjectMapper");
const Livro_1 = require("@/dominio/modelos/Livro");
class LivroEntityMapper extends ObjectMapper_1.ObjectMapper {
    constructor() {
        super();
    }
    async mapear(entity) {
        return new Livro_1.Livro({
            id: entity.id,
            nome: entity.nome,
            sinopse: entity.sinopse,
            isbn: entity.isbn,
            urlImagem: entity.urlImagem,
            autores: entity.autores
        });
    }
}
exports.LivroEntityMapper = LivroEntityMapper;
