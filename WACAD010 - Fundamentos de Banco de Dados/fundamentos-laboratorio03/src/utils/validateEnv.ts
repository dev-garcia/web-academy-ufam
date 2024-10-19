import { cleanEnv, str, port } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    DATABASE_URL: str(),
    PORT: port(),
    NODE_ENV: str(),
  });
}

export default validateEnv;
