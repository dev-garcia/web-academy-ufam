import express, { Request } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import router from "./router";
import cookieParser from "cookie-parser";
import setLanguageCookie from "./middlewares/setLangCookie";
import session from "./middlewares/session";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

declare module "express-session" {
  interface SessionData {
    uid: number;
  }
}
dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(cookieParser());
app.use(express.json());
app.use(setLanguageCookie);
app.use(session());
app.use(router);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}`);
});
