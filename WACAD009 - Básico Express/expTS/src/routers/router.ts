import { Router } from "express";
import {
  generateLorem,
  renderHb1,
  renderHb2,
  renderHb3,
  renderHb4,
} from "../controllers/main";
import productController from "../controllers/produto";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/lorem", generateLorem);

router.get("/hb1", renderHb1);
router.get("/hb2", renderHb2);
router.get("/hb3", renderHb3);

router.get("/hb4", renderHb4);

router.get("/produtos", productController.index);
router.get("/produtos/create", productController.create);
router.post("/produtos/save", productController.save);
router.get("/produtos/edit/:id", productController.edit);
router.post("/produtos/update/:id", productController.update);
router.post("/produtos/remove/:id", productController.remove);

export default router;
