import expressSession from "express-session";
import { v4 as uuidv4 } from "uuid";

function session() {
  return expressSession({
    genid: () => uuidv4(),
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: true,
  });
}

export default session;
