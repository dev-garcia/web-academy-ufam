import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "./middlewares/session";
import router from "./router";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";
import validateEnv from "./utils/validateEnv";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(cookieParser());
app.use(express.json());
app.use(session());
app.use("/", router);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}, swagger em http://localhost:${PORT}/api`);
});
