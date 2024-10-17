import { Request, Response } from "express";
import { loremIpsum } from "lorem-ipsum";

export const generateLorem = (req: Request, res: Response) => {
  const { paragraphs } = req.query;
  const paragraphCount = parseInt(paragraphs as string) || 1;

  const loremText = loremIpsum({
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

export const renderHb1 = (req: Request, res: Response) => {
  res.render("hb1", {
    mensagem: "Olá, você está aprendendo Express + HBS!",
    layout: "main",
  });
};

export const renderHb2 = (req: Request, res: Response) => {
  res.render("hb2", {
    poweredByNodejs: true,
    name: "Express",
    type: "Framework",
    layout: false,
  });
};

export const renderHb3 = (req: Request, res: Response) => {
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

const technologies = [
  { name: "Express", type: "Framework", poweredByNodejs: true },
  { name: "Laravel", type: "Framework", poweredByNodejs: false },
  { name: "React", type: "Library", poweredByNodejs: true },
  { name: "Handlebars", type: "Engine View", poweredByNodejs: true },
  { name: "Django", type: "Framework", poweredByNodejs: false },
  { name: "Docker", type: "Virtualization", poweredByNodejs: false },
  { name: "Sequelize", type: "ORM tool", poweredByNodejs: true },
];

export const renderHb4 = (req: Request, res: Response) => {
  res.render("hb4", {
    technologies,
    layout: false,
  });
};
