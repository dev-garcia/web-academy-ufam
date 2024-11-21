import { Product } from "@prisma/client";

type CreateProductDto = Pick<Product, "name" | "price" | "stockQuantity">;
type UpdateProductDto = Pick<Product, "name" | "price" | "stockQuantity">;

export type { CreateProductDto, UpdateProductDto };
