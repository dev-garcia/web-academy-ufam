import { Request, Response } from "express";

const compras: any = []; // substituindo o banco de dados no momento

const index = (req: Request, res: Response) => {
  res.json(compras);
};

const create = (req: Request, res: Response) => {};

const read = (req: Request, res: Response) => {};

const update = (req: Request, res: Response) => {};

const remove = (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
