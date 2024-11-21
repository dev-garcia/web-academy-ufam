import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema } from "joi";

export const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.validate(req.body, {
        abortEarly: false,
      });
      if (result.error) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(result.error.details);
      } else {
        next();
      }
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  };
};
