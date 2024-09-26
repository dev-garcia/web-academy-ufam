"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const DiretorioLog = path_1.default.join(__dirname, "../../logs");
if (!fs_1.default.existsSync(DiretorioLog)) {
  fs_1.default.mkdirSync(DiretorioLog, { recursive: true });
}
const armazenarLog = fs_1.default.createWriteStream(
  path_1.default.join(DiretorioLog, "access.log"),
  {
    flags: "a",
  },
);
function logger(type) {
  return (req, res, next) => {
    const mensagemLog =
      type === "Complete"
        ? `Log completo, data: ${new Date().toISOString()}, url: ${req.url}, método: ${req.method}, Versão http: ${req.httpVersion}, Dados do navegador: ${req.get("User-Agent")}`
        : `Log simples, data: ${new Date().toISOString()}, url: ${req.url} e método: ${req.method}`;
    armazenarLog.write(`${mensagemLog}\n`);
    next();
  };
}
exports.default = logger;
