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
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3333;
app.use((0, logger_1.default)("Complete"));
app.use(router_1.default);
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}.`);
});
