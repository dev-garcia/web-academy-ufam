import http from "http";
import fs from "fs";
import path from "path";

import dotenv from "dotenv";
import { createLink } from "./util.js";

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

const PORT = process.env.PORT ?? 3333;
const directoryPath = path.join(process.cwd(), "public");

const server = http.createServer((req, res) => {
  const filePath = path.join(directoryPath, req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><ul>");

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erro ao ler o diretório");
        return;
      }

      files.forEach((file) => {
        res.write(createLink(file));
      });

      res.write("</ul></body></html>");
      res.end();
    });
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Arquivo não encontrado");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<html><body>`);
      res.write(`<a href="/">Voltar</a><br/><br/>\n`);
      res.write(`<p>${data}</p>`);
      res.write(`</body></html>`);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`Rodando em http://localhost:${PORT}`);
});
