"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarConexaoBDPrisma = void 0;
const client_1 = require("@prisma/client");
const Logger_1 = require("@/common/Logger");
const gerarConexaoBDPrisma = () => {
    const logger = Logger_1.Logger.pegarInstancia();
    const conexao = new client_1.PrismaClient({
        log: [
            {
                emit: "event",
                level: "query"
            },
            {
                emit: "event",
                level: "error"
            }
        ]
    });
    conexao.$on("query", (e) => {
        logger.info(`Query: ${e.query}`);
        logger.info(`Params: ${e.params}`);
        logger.info(`Duracao: ${e.duration}ms`);
    });
    conexao.$on("error", (e) => {
        logger.error(e.message);
        logger.error(e.target);
    });
    return conexao;
};
exports.gerarConexaoBDPrisma = gerarConexaoBDPrisma;
