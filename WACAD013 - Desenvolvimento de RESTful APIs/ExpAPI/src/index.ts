import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import router from "./router";
import cookieParser from "cookie-parser";
import setLanguageCookie from "./middlewares/setLangCookie";
import session from "express-session";
import { v4 as uuid4 } from "uuid";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(cookieParser());
app.use(
  session({
    genid: () => uuid4(),
    secret: "string-aleatoria-gerada",
    resave: true, // false expira em 2 horas, true geramos um novo após a expiração
    saveUninitialized: true,
  })
); // não pode ficar antes de cookieParser, pois as ordens importam e sessões usam cookies, por isso tem de ficar depois
app.use(setLanguageCookie);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}`);
});
