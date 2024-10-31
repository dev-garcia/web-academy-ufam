import { User } from "@prisma/client";

export interface LoginDto {
  email: string;
  password: string;
}

export type SignUpDto = Pick<User, "name" | "email" | "password">;
