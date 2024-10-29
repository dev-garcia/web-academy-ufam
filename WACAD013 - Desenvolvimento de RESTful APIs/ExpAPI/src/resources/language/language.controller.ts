import { Request, Response } from "express";
import { ChangeLanguageDto } from "./language.types";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const changeLanguage = (req: Request, res: Response) => {
  const { lang }: ChangeLanguageDto = req.body;
  res.cookie("lang", lang);
  res.send(StatusCodes.ACCEPTED).send(ReasonPhrases.ACCEPTED);
};

export default { changeLanguage };
