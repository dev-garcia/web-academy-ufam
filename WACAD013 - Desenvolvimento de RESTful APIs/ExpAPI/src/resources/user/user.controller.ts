import { Request, Response } from "express";
import { createUser, findUserByEmail, getAllUsers } from "./user.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateUserDto } from "./user.types";

const index = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const create = async (req: Request, res: Response) => {
  const user = req.body as CreateUserDto;
  try {
    if (!findUserByEmail(user.email)) {
      const newUser = await createUser(user);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const read = (req: Request, res: Response) => {};

const update = (req: Request, res: Response) => {};

const remove = (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
