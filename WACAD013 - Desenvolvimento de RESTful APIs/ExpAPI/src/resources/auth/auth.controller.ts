import { Request, Response } from "express";
import { LoginDto, SignUpDto } from "./auth.types";
import { checkCredentials, findUserByEmail } from "./auth.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { createUser } from "../user/user.service";
import bcrypt from "bcryptjs";

const signup = async (req: Request, res: Response): Promise<void> => {
  /* 
    #swagger.summary = 'Cria um novo usuário'
  */
  const user: SignUpDto = req.body;

  try {
    if (await findUserByEmail(user.email)) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ message: "E-mail já registrado" });
      return;
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await createUser({ ...user, password: hashedPassword });

    res.status(StatusCodes.CREATED).json(newUser);
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Erro ao criar o usuário");
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  /* 
    #swagger.summary = 'Realiza login'
  */
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Credenciais inválidas" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Credenciais inválidas" });
      return;
    }

    req.session.uid = user.id;
    req.session.userTypeId = user.userTypeId;

    res.status(StatusCodes.OK).json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Erro durante o login:", err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Erro interno no servidor" });
  }
};

const logout = (req: Request, res: Response) => {
  /* 
    #swagger.summary = 'Realiza logout'
  */
  req.session.destroy((err) => {
    if (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    } else {
      res.status(StatusCodes.OK).send(ReasonPhrases.OK);
    }
  });
};

export default { signup, login, logout };
