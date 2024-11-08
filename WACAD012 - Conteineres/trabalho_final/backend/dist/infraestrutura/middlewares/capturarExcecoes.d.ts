import { NextFunction, Request, Response } from "express";
declare const capturarExcecoes: (erro: any, req: Request, res: Response, next: NextFunction) => Promise<void>;
export { capturarExcecoes };
