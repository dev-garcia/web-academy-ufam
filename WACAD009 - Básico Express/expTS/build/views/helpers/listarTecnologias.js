"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTecnologias = void 0;
function listarTecnologias(technologies) {
    const list = technologies
        .filter((tech) => tech.poweredByNodejs)
        .map((tech) => `<li>${tech.name} - ${tech.type}</li>`)
        .join("");
    return `<ul>${list}</ul>`;
}
exports.listarTecnologias = listarTecnologias;
