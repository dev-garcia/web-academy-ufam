import express from "express";
import validateEnv from "./utils/validateEnv";
import logger from "./middlewares/logger";
import router from "./routers/router";

validateEnv();
const app = express();
const PORT = process.env.PORT ?? 3333;

app.use(logger("Complete"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}.`);
});
