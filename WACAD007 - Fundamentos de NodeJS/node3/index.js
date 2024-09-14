require("dotenv").config();
const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const loremIpsum = require("lorem-ipsum").loremIpsum;

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  const url = req.url;

  if (url === "/" || url === "/index.html") {
    const data = await fs.readFile(
      path.join(__dirname, "public", "index.html"),
      "utf8"
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else if (url.endsWith(".css")) {
    const css = await fs.readFile(
      path.join(__dirname, "public", "styles.css"),
      "utf8"
    );
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
  } else if (url.endsWith(".js")) {
    const js = await fs.readFile(
      path.join(__dirname, "public", "script.js"),
      "utf8"
    );
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(js);
  } else if (url.startsWith("/lorem")) {
    const params = new URLSearchParams(url.split("?")[1]);
    const entradaParagrafos =
      parseInt(params.get("entradaParagrafos"), 10) || 1;
    const paragraphs = loremIpsum({
      count: entradaParagrafos,
      units: "paragraphs",
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      paragraphs
        .split("\n")
        .map((p) => `<p>${p}</p>`)
        .join("")
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found<a href='/'>Voltar</a></h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Rodando em http://${hostname}:${port}/`);
});
