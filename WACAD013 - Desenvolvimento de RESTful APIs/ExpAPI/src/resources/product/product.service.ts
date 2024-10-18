import { Product, PrismaClient } from "@prisma/client";
import { CreateProductDto } from "./product.types";

const prisma = new PrismaClient();

export const getAllProducts = async (): Promise<Product[]> => {
  return prisma.product.findMany();
};

export const checkAllreadyExists = async (name: string): Promise<boolean> => {
  return !!(await prisma.product.findUnique({ where: { name } }));
};

export const createProduct = async (
  product: CreateProductDto
): Promise<Product> => {
  return prisma.product.create({ data: product });
};
