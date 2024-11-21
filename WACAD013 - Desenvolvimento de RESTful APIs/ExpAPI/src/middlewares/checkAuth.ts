import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.uid) next();
  else res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (
    req.session &&
    req.session.userTypeId === "7edd25c6-c89e-4c06-ae50-c3c32d71b8ad"
  ) {
    next();
  } else {
    res.status(StatusCodes.FORBIDDEN).send(ReasonPhrases.FORBIDDEN);
  }
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.uid) {
    next();
  } else {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
  }
};
