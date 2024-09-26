"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLorem = void 0;
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
