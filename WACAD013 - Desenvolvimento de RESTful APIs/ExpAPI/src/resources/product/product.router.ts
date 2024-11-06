import { Router } from "express";
import productController from "./product.controller";
import { productSchema } from "./product.schema";
import { validate } from "../../middlewares/validate";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.get("/", productController.index);
router.post("/", checkAuth, validate(productSchema), productController.create);
router.get("/:id", productController.read);
router.put("/:id", checkAuth, productController.update);
router.delete("/:id", checkAuth, productController.remove);

export default router;
