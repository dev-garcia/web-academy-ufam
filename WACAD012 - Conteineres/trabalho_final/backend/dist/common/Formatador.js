"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatador = void 0;
const Dotenv_1 = require("./Dotenv");
Dotenv_1.Dotenv.carregarVariaveis();
class Formatador {
    static formatarData(data) {
        let ano = data.getFullYear();
        let mes = (data.getMonth() < 10) ? `0${data.getMonth()}` : data.getMonth();
        let dia = (data.getDate() < 10) ? `0${data.getDate()}` : data.getDate();
        let hora = (data.getHours() < 10) ? `0${data.getHours()}` : data.getHours();
        let minuto = (data.getMinutes() < 10) ? `0${data.getMinutes()}` : data.getMinutes();
        let segundo = (data.getSeconds() < 10) ? `0${data.getSeconds()}` : data.getSeconds();
        let timezone = (data.getTimezoneOffset() / 60);
        let timezoneFormatado = (timezone < 10) ? `0${Math.abs(timezone)}` : Math.abs(timezone);
        timezoneFormatado = (timezone > 0) ? `-${timezoneFormatado}` : `+${timezoneFormatado}`;
        return `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo} GMT${timezoneFormatado}`;
    }
}
exports.Formatador = Formatador;
