import { cleanEnv, str, port } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    SESSION_SECRET: str(),
  });
}

export default validateEnv;
