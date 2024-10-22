import { Router } from "express";

import productRouter from "../resources/product/product.router";
import languageRouter from "../resources/language/language.router";
import authRouter from "../resources/auth//auth.router";

const router = Router();

router.use("/products", productRouter);
router.use("/language", languageRouter);
router.use("/auth", authRouter);

export default router;
