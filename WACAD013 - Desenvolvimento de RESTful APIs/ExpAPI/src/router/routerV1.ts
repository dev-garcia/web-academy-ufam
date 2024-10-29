import { Router } from "express";

import productRouter from "../resources/product/product.router";
import languageRouter from "../resources/language/language.router";
import authRouter from "../resources/auth//auth.router";
import userRouter from "../resources/user/user.route";

const router = Router();

router.use("/products", productRouter);
router.use("/language", languageRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter)

export default router;
