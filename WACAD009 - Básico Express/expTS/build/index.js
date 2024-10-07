"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const router_1 = __importDefault(require("./routers/router"));
const express_handlebars_1 = require("express-handlebars");
const listarTecnologias_1 = require("./views/helpers/listarTecnologias");
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3333;
app.engine(
  "handlebars",
  (0, express_handlebars_1.engine)({
    helpers: {
      listarTecnologias: listarTecnologias_1.listarTecnologias,
    },
  }),
);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.use((0, logger_1.default)("Complete"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(router_1.default);
app.use("/css", express_1.default.static(`${__dirname}/../public/css`));
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}.`);
});
