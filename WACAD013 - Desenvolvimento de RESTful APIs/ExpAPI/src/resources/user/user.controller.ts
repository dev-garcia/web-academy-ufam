import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./user.types";

const index = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Lista todos os usuários'
  */
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
};

const create = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Cria um novo usuário'
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      schema: { $ref: '#/definitions/CreateUser' }
    }
  */
  try {
    const user = await createUser(req.body as CreateUserDto);
    res.status(StatusCodes.CREATED).json(user);
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Erro ao criar usuário. Tente novamente mais tarde.",
    });
  }
};

const read = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Busca um usuário pelo ID'
    #swagger.parameters['id'] = { description: 'ID do usuário' }
  */
  try {
    const user = await getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
};

const update = async (req: Request, res: Response) => {
  /*
  #swagger.summary = 'Atualiza um usuário existente'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: { $ref: '#/definitions/UpdateUser' }
  }
*/

  const userData = req.body as UpdateUserDto;
  try {
    const updatedUser = await updateUser(req.params.id, userData);
    res.json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Erro ao atualizar o usuário",
    });
  }
};

const remove = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Deleta um usuário'
    #swagger.parameters['id'] = { description: 'ID do usuário' }
  */
  try {
    await deleteUser(req.params.id);
    res.status(StatusCodes.OK).json({
      message: "Usuário deletado com sucesso",
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Erro ao deletar o usuário",
    });
  }
};

export default { index, create, read, update, remove };
