import { Request, Response } from "express";
import {
  checkAlreadyExists,
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./product.service";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { CreateProductDto } from "./product.types";

const index = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Lista todos os produtos'
  */
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
};

const create = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Cria um novo produto'
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      schema: { $ref: '#/definitions/CreateProduct' }
    }
  */
  const newProduct = req.body as CreateProductDto;
  try {
    if (!(await checkAlreadyExists(newProduct.name))) {
      const product = await createProduct(newProduct);
      res.status(StatusCodes.OK).json(product);
    } else {
      res.status(StatusCodes.CONFLICT).send(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
};

const read = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Busca um produto pelo ID'
  */
  try {
    const product = await getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
};

const update = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Atualiza um produto existente'
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      schema: { $ref: '#/definitions/UpdateProduct' }
    }
  */
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Erro ao atualizar o produto",
    });
  }
};

const remove = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Deleta um produto existente'
  */
  try {
    await deleteProduct(req.params.id);
    res.status(StatusCodes.OK).json({
      message: "Produto deletado com sucesso",
    });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Erro ao deletar o produto",
    });
  }
};

export default { index, create, read, update, remove };
