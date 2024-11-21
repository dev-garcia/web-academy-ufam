import { PrismaClient, Product } from "@prisma/client";
import { CreateProductDto, UpdateProductDto } from "./product.types";

const prisma = new PrismaClient();

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    return await prisma.product.findMany();
  } catch (err) {
    console.error("Error fetching products:", err);
    throw new Error("Could not fetch products");
  }
};

export const checkAlreadyExists = async (name: string): Promise<boolean> => {
  return !!(await prisma.product.findUnique({ where: { name } }));
};

export const createProduct = async (
  product: CreateProductDto
): Promise<Product> => {
  return prisma.product.create({ data: product });
};

export const getProductById = async (id: string): Promise<Product | null> => {
  return prisma.product.findUnique({ where: { id } });
};

export const updateProduct = async (
  id: string,
  product: UpdateProductDto
): Promise<Product> => {
  return prisma.product.update({
    where: { id },
    data: product,
  });
};

export const deleteProduct = async (id: string): Promise<void> => {
  await prisma.product.delete({ where: { id } });
};
