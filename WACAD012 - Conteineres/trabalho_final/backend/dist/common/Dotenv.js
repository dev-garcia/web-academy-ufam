"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dotenv = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
class Dotenv {
    static carregarVariaveis(nome = ".env") {
        const caminho = (0, node_path_1.join)(process.cwd(), nome);
        if (!(0, node_fs_1.existsSync)(caminho))
            throw new Error("O projeto deve ter um arquivo de configuracoes com o nome especificado ou com o nome '.env'.");
        const conteudo = (0, node_fs_1.readFileSync)(caminho, {
            encoding: "utf8",
            flag: "r",
        }).split("\n");
        for (let linha of conteudo) {
            linha = linha.trim();
            if (linha && !linha.startsWith("#")) {
                let [chave, valor] = linha.split("=");
                valor = valor.replace('"', "");
                valor = valor.replace('"', "");
                process.env[chave] = valor;
            }
        }
    }
}
exports.Dotenv = Dotenv;
