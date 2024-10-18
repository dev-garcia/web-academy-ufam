import { Request, Response } from "express";
import {
  checkAllreadyExists,
  createProduct,
  getAllProducts,
} from "./product.service";
import { CreateProductDto } from "./product.types";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const index = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json();
  } catch (err) {
    res.status(500).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const product: CreateProductDto = req.body;
    if (!(await checkAllreadyExists(product.name))) {
      const newProduct = await createProduct(product);
      res.json(newProduct);
    } else {
      res.status(StatusCodes.CONFLICT).send(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const read = async (req: Request, res: Response) => {};

const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
