import { NextFunction, Request, Response } from "express";
declare const imprimirLogRequisicoes: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export { imprimirLogRequisicoes };
