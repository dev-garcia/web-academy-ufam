"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMapper = void 0;
class ObjectMapper {
    async mapearLista(listaOrigem) {
        const listaDestino = [];
        for (let origem of listaOrigem) {
            const destino = await this.mapear(origem);
            listaDestino.push(destino);
        }
        return listaDestino;
    }
}
exports.ObjectMapper = ObjectMapper;
