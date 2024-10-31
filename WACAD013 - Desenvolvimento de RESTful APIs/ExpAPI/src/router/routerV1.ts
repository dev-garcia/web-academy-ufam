import { Router } from "express";

import productRouter from "../resources/product/product.router";
import languageRouter from "../resources/language/language.router";
import authRouter from "../resources/auth//auth.router";
import userRouter from "../resources/user/user.route";

const router = Router();

router.use(
  "/products",
  // #swagger.tags = ['Produto']
  productRouter
);
router.use(
  "/language",
  // #swagger.tags = ['Linguagens']
  languageRouter
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
