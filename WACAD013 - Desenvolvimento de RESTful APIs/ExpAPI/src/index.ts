import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import router from "./router";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("rodando em http://localhost:5566");
});
