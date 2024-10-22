import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.uid) next();
  else res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
};
