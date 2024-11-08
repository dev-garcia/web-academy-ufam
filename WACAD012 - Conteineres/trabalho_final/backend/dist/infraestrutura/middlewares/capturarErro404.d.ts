import { NextFunction, Request, Response } from "express";
declare const capturarErro404: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export { capturarErro404 };
