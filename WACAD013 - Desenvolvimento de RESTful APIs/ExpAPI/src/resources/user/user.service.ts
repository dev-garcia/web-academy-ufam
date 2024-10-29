import { PrismaClient, User } from "@prisma/client";
import { CreateUserDto } from "./user.types";
import { genSalt, hash } from "bcryptjs";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
};

export const createUser = async (user: CreateUserDto): Promise<User> => {
  const salt = await genSalt();
  const password = await hash(user.password, salt);
  return prisma.user.create({ data: { ...user, password } });
};

export const findUserByEmail = (email: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { email } });
};
