import express from "express";
import validateEnv from "./utils/validateEnv";
import logger from "./middlewares/logger";
import router from "./routers/router";
import { engine } from "express-handlebars";
import { listarTecnologias } from "./views/helpers/listarTecnologias";

validateEnv();
const app = express();
const PORT = process.env.PORT ?? 3333;

app.engine(
  "handlebars",
  engine({
    helpers: {
      listarTecnologias,
    },
  }),
);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(logger("Complete"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use("/css", express.static(`${__dirname}/../public/css`));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}.`);
});
