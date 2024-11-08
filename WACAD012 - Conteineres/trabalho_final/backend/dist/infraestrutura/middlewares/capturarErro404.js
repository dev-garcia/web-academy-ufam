"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capturarErro404 = void 0;
const capturarErro404 = async (req, res, next) => {
    res.status(404);
    res.send(`A rota ${req.url} não existe no servidor.`);
};
exports.capturarErro404 = capturarErro404;
