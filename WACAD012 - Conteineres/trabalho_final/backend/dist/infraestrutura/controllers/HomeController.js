"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
class HomeController {
    async home(req, res) {
        res.json({
            nome: "webacademy-livros-backend",
            versao: "1.0.0",
            dataVersao: "2023-05-08",
            responsaveis: [
                {
                    nome: "linnikmaciel",
                    email: "linnik.souza123@gmail.com",
                    github: "https://github.com/linnikmaciel",
                },
            ],
        });
    }
}
exports.HomeController = HomeController;
