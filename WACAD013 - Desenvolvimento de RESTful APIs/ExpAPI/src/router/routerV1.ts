import { Router } from "express";
import productRouter from "../resources/product/product.router";
import authRouter from "../resources/auth/auth.router";
import userRouter from "../resources/user/user.router";

const router = Router();

router.use(
  "/products",
  // #swagger.tags = ['Produto']
  productRouter
);
router.use(
  "/auth",
  // #swagger.tags = ['Autenticação']
  authRouter
);
router.use(
  "/users",
  // #swagger.tags = ['Usuários']
  userRouter
);

export default router;
