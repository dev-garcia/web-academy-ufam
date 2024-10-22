import { NextFunction, Request, Response } from "express";
const setLanguageCookie = (req: Request, res: Response, next: NextFunction) => {
  if (!("lang" in req.cookies)) {
    res.cookie("lang", "pt-BR", { httpOnly: true });
    next();
  }
};

export default setLanguageCookie;
