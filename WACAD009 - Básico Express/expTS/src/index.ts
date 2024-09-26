import express from "express";
import validateEnv from "./utils/validateEnv";
import logger from "./middlewares/logger";
import router from "./routers/router";
import { engine } from "express-handlebars";

validateEnv();
const app = express();
const PORT = process.env.PORT ?? 3333;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(logger("Complete"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}.`);
});
