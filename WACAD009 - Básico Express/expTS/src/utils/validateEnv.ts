import { cleanEnv, port, str } from "envalid";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
  });
}

export default validateEnv;
