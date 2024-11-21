import { PrismaClient, User } from "@prisma/client";
import { LoginDto } from "./auth.types";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const checkCredentials = async (
  credentials: LoginDto
): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { email: credentials.email },
  });
  if (user && (await compare(credentials.password, user.password))) {
    return user;
  }
  return null;
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { email } });
};
