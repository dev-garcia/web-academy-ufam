"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("@/app");
const Logger_1 = require("@/common/Logger");
const node_http_1 = require("node:http");
const iniciarAplicacao = async () => {
    const logger = Logger_1.Logger.pegarInstancia();
    const porta = (process.env.PORTA || 3000);
    const servidor = (0, node_http_1.createServer)(app_1.app);
    try {
        servidor.listen(porta, () => logger.info(`SERVIDOR RODANDO VIOLENTAMENTE NA PORTA ${porta}.`));
    }
    catch (erro) {
        logger.error(erro);
        process.exit(130);
    }
};
void iniciarAplicacao();
