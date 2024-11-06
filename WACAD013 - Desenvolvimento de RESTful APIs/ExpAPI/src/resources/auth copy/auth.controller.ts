import { Request, Response } from "express";
import { LoginDto, SignUpDto } from "./auth.types";
import { checkAuth, checkCredencials } from "./auth.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { UserTypes } from "../userType/userType.constants";
import { findUserByEmail } from "../user/user.service";

const signup = async (req: Request, res: Response) => {
  const user = req.body as SignUpDto;
  try {
    if (await findUserByEmail(user.email)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const newUser = await createUser({
        ...user,
        userTypeId: UserTypes.client,
      });
      res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED);
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const login = async (req: Request, res: Response) => {
  const credentials = req.body as LoginDto;
  try {
    const user = await checkCredencials(credentials);
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    } else {
      req.session.uid = user.id;
      req.session.userTypeId = userTypeId;
      res.status(StatusCodes.OK).send(ReasonPhrases.OK);
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
    res.status(StatusCodes.OK).send(ReasonPhrases.OK); // poederia ser o NO_CONTENT também, importante seguir a documentação da api.
  });
};

export default { login, signup, logout };
