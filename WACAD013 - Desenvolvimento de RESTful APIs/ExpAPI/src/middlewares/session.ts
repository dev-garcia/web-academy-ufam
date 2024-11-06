import expressSession from "express-session";
import { v4 as uuid4 } from "uuid";

function session() {
  return expressSession({
    genid: () => uuid4(),
    secret: process.env.SESSION_SECRET!, // A "!" diz que estamos garantindo que essa chave existe.
    resave: true, // false expira em 2 horas ou hora que determinamos, true geramos um novo após a expiração
    saveUninitialized: true,
  });
} // não pode ficar antes de cookieParser, pois as ordens importam e sessões usam cookies, por isso tem de ficar depois

export default expressSession;
