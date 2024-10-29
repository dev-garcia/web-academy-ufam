import { cleanEnv, str, port } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    DEFAULT_LANG: str({ choices: ["pt-BR", "en-US"] }),
  });
}

export default validateEnv;
