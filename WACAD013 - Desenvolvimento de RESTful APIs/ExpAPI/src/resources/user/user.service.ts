import { PrismaClient, User } from "@prisma/client";
import { CreateUserDto, UpdateUserDto } from "./user.types";

const prisma = new PrismaClient();

export const getAllUsers = async (page = 1, limit = 10): Promise<User[]> => {
  const skip = (page - 1) * limit;
  return prisma.user.findMany({
    skip,
    take: limit,
  });
};

export const getUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id } });
};

export const createUser = async (user: CreateUserDto): Promise<User> => {
  const userTypeExists = await prisma.userType.findUnique({
    where: { id: user.userTypeId },
  });

  if (!userTypeExists) {
    throw new Error("Tipo de usuário inválido.");
  }

  return prisma.user.create({ data: user });
};

export const updateUser = async (
  id: string,
  user: UpdateUserDto
): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data: user,
  });
};

export const deleteUser = async (id: string): Promise<void> => {
  await prisma.user.delete({ where: { id } });
};
