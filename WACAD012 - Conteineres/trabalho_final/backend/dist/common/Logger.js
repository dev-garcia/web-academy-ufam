"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const Dotenv_1 = require("./Dotenv");
const Formatador_1 = require("./Formatador");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const node_util_1 = require("node:util");
Dotenv_1.Dotenv.carregarVariaveis();
class Logger {
    constructor() {
        this.diretorioLog = (0, node_path_1.join)(process.cwd(), "/log");
        this.deveEscreverEmArquivo = (JSON.parse(process.env.ESCREVER_LOG_ARQUIVO));
        if (this.deveEscreverEmArquivo) {
            if (!(0, node_fs_1.existsSync)(this.diretorioLog))
                (0, node_fs_1.mkdirSync)(this.diretorioLog);
        }
    }
    info(mensagem) {
        const mensagemLog = `[INFO] ${this.prepararMensagemLog(mensagem)}`;
        if (this.deveEscreverEmArquivo)
            this.escreverLogEmArquivo("infos.log", `${mensagemLog}\n`);
        process
            .stdout
            .write(node_util_1.format.apply(this, [`\x1b[92m${mensagemLog}\x1b[0m\n`]));
    }
    warning(mensagem) {
        const mensagemLog = `[WARN] ${this.prepararMensagemLog(mensagem)}`;
        if (this.deveEscreverEmArquivo)
            this.escreverLogEmArquivo("warnings.log", `${mensagemLog}\n`);
        process
            .stdout
            .write(node_util_1.format.apply(this, [`\x1b[93m${mensagemLog}\x1b[0m\n`]));
    }
    error(mensagem) {
        const mensagemLog = `[ERROR] ${this.prepararMensagemLog(mensagem)}`;
        if (this.deveEscreverEmArquivo)
            this.escreverLogEmArquivo("errors.log", `${mensagemLog}\n`);
        process
            .stdout
            .write(node_util_1.format.apply(this, [`\x1b[91m${mensagemLog}\x1b[0m\n`]));
    }
    prepararMensagemLog(mensagem) {
        const dataLog = Formatador_1.Formatador.formatarData(new Date());
        return `${dataLog}: ${mensagem}`;
    }
    escreverLogEmArquivo(nomeArquivo, mensagemLog) {
        (0, node_fs_1.writeFileSync)((0, node_path_1.join)(this.diretorioLog, nomeArquivo), mensagemLog, { flag: "a+" });
    }
    static pegarInstancia() {
        if (Logger.instancia === null)
            Logger.instancia = new Logger();
        return Logger.instancia;
    }
}
exports.Logger = Logger;
Logger.instancia = null;
