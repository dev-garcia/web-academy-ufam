"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHb4 = exports.renderHb3 = exports.renderHb2 = exports.renderHb1 = exports.generateLorem = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const generateLorem = (req, res) => {
    const { paragraphs } = req.query;
    const paragraphCount = parseInt(paragraphs) || 1;
    const loremText = (0, lorem_ipsum_1.loremIpsum)({
        count: paragraphCount,
        format: "html",
        paragraphLowerBound: 3,
        paragraphUpperBound: 7,
        random: Math.random,
        sentenceLowerBound: 5,
        sentenceUpperBound: 15,
        suffix: "\n",
        units: "paragraphs",
    });
    res.send(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gerador de Lorem Ipsum</title>
      </head>
      <body>
        <h1>Gerador de Lorem Ipsum</h1>
        <form action="/lorem" method="get">
          <input type="number" min="0" name="paragraphs" placeholder="Quantidade de parágrafos" />
          <button>Gerar</button>
        </form>
        <div>${loremText}</div>
      </body>
    </html>
  `);
};
exports.generateLorem = generateLorem;
const renderHb1 = (req, res) => {
    res.render("hb1", {
        mensagem: "Olá, você está aprendendo Express + HBS!",
        layout: "main",
    });
};
exports.renderHb1 = renderHb1;
const renderHb2 = (req, res) => {
    res.render("hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
        layout: false,
    });
};
exports.renderHb2 = renderHb2;
const renderHb3 = (req, res) => {
    const profes = [
        { nome: "David Fernandes", sala: 1238 },
        { nome: "Horácio Fernandes", sala: 1233 },
        { nome: "Edleno Moura", sala: 1236 },
        { nome: "Elaine Harada", sala: 1231 },
    ];
    res.render("hb3", {
        profes,
        layout: false,
    });
};
exports.renderHb3 = renderHb3;
const technologies = [
    { name: "Express", type: "Framework", poweredByNodejs: true },
    { name: "Laravel", type: "Framework", poweredByNodejs: false },
    { name: "React", type: "Library", poweredByNodejs: true },
    { name: "Handlebars", type: "Engine View", poweredByNodejs: true },
    { name: "Django", type: "Framework", poweredByNodejs: false },
    { name: "Docker", type: "Virtualization", poweredByNodejs: false },
    { name: "Sequelize", type: "ORM tool", poweredByNodejs: true },
];
const renderHb4 = (req, res) => {
    res.render("hb4", {
        technologies,
        layout: false,
    });
};
exports.renderHb4 = renderHb4;
