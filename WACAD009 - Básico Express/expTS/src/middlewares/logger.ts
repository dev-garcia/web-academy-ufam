import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
type LogType = "Complete" | "Simple";

const DiretorioLog = path.join(__dirname, "../../logs");

if (!fs.existsSync(DiretorioLog)) {
  fs.mkdirSync(DiretorioLog, { recursive: true });
}

const armazenarLog = fs.createWriteStream(
  path.join(DiretorioLog, "access.log"),
  {
    flags: "a",
  },
);

function logger(type: LogType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const mensagemLog =
      type === "Complete"
        ? `Log completo, data: ${new Date().toISOString()}, url: ${req.url}, método: ${req.method}, Versão http: ${req.httpVersion}, Dados do navegador: ${req.get("User-Agent")}`
        : `Log simples, data: ${new Date().toISOString()}, url: ${req.url} e método: ${req.method}`;

    armazenarLog.write(`${mensagemLog}\n`);
    next();
  };
}

export default logger;
