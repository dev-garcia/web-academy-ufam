import { User } from "@prisma/client";

type CreateUserDto = Pick<User, "name" | "email" | "password" | "userTypeId">;
type UpdateUserDto = Pick<User, "name" | "email" | "password" | "userTypeId">;

export type { CreateUserDto, UpdateUserDto };
