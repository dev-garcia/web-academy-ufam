import { NextFunction, Request, Response } from "express";
declare class LivrosController {
    private service;
    private logger;
    constructor();
    buscarTodos(req: Request, res: Response): Promise<void>;
    buscarLivroPorIsbn(req: Request, res: Response, next: NextFunction): Promise<void>;
    cadastrarNovoLivro(req: Request, res: Response, next: NextFunction): Promise<void>;
    atualizarLivro(req: Request, res: Response, next: NextFunction): Promise<void>;
    deletarLivro(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export { LivrosController };
