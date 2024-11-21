import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config();
const doc = {
  info: {
    title: "API da Loja virtual",
    description: "Documentação da API",
  },
  host: `localhost:${process.env.PORT}`,
  schemes: ["http"],
  definitions: {
    CreateProduct: {
      name: "Notebook",
      price: 1999.99,
      stockQuantity: 10,
    },
    UpdateProduct: {
      name: "Produto Atualizado",
      price: 99.99,
      stockQuantity: 5,
    },
    CreateUser: {
      name: "Cristian Garcia",
      email: "cristian.garcia@icomp.ufam.edu.br",
      password: "123456",
      userTypeId: "6a4cda94-fbb6-476b-be29-f4124cae9058",
    },
    UpdateUser: {
      name: "Nome Atualizado",
      email: "email.atualizado@gmail.com",
      password: "novasenha",
      userTypeId: "7edd25c6-c89e-4c06-ae50-c3c32d71b8ad",
    },
  },
};
const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];

swaggerAutogen()(outputFile, routes, doc);
