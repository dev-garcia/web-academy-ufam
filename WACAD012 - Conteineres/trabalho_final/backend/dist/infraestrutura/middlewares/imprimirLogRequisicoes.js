"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imprimirLogRequisicoes = void 0;
const Logger_1 = require("@/common/Logger");
const imprimirLogRequisicoes = async (req, res, next) => {
    const logger = Logger_1.Logger.pegarInstancia();
    const inicio = Date.now();
    res.on("finish", () => {
        const { method, originalUrl } = req;
        const { statusCode } = res;
        const fim = Date.now();
        const mensagem = `${method} ${originalUrl} ${statusCode} ${(fim - inicio)}ms.`;
        if ((statusCode >= 100) && (statusCode <= 299))
            logger.info(mensagem);
        else if ((statusCode >= 300) && (statusCode <= 399))
            logger.info(mensagem);
        else if ((statusCode >= 400) && (statusCode <= 599))
            logger.error(mensagem);
    });
    next();
};
exports.imprimirLogRequisicoes = imprimirLogRequisicoes;
