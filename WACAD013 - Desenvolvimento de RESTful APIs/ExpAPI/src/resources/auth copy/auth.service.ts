import { PrismaClient, User } from "@prisma/client";
import { LoginDto } from "./auth.types";
import { findUserByEmail } from "../user/user.service";

const prisma = new PrismaClient();

export const checkCredencials = async (
  credentials: LoginDto
): Promise<User | null> => {
  const user = await findUserByEmail(credentials.email);
  if (!user) return null;
  const ok = await compare(credentials.password, user.password);
  if (ok) return user;
  return null;
};

const users = [
  {
    id: 1,
    email: "aaaa@example.com",
    password: "123456",
  },
  {
    id: 2,
    email: "bbbb@example.com",
    password: "123456",
  },
];

const checkAuth = (email: string, password: string): number | null => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return user.id;
  }
  return null;
};

export { checkAuth };
