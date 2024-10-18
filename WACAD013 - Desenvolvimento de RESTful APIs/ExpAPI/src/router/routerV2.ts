import { Router } from "express";

import productRouter from "../resources/product/product.router";

const router = Router();

router.use("/products", productRouter);
router.use("/compras", productRouter);

export default router;
