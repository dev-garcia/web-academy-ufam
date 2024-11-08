"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroParaCriarMapper = void 0;
const node_crypto_1 = require("node:crypto");
const ObjectMapper_1 = require("@/common/ObjectMapper");
const Livro_1 = require("../modelos/Livro");
class LivroParaCriarMapper extends ObjectMapper_1.ObjectMapper {
    constructor() {
        super();
    }
    async mapear(dto) {
        return new Livro_1.Livro({
            id: (0, node_crypto_1.randomUUID)(),
            nome: dto.nome,
            sinopse: dto.sinopse,
            isbn: dto.isbn,
            urlImagem: dto.urlImagem,
            autores: dto.autores
        });
    }
}
exports.LivroParaCriarMapper = LivroParaCriarMapper;
