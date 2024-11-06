// DTO

import { Product } from "@prisma/client";

export type CreateProductDto = Pick<
  Product,
  "name" | "price" | "stockQuantity"
>;

export type UpdateProductDto = CreateProductDto;
