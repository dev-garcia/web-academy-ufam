import { Router } from "express";
import usuarioController from "./user.controller";
import { validate } from "../../middlewares/validate";

import { checkAuth } from "../../middlewares/checkAuth";
import usuarioSchema from "./user.schema";

const router = Router();

router.get("/", checkAuth, usuarioController.index);
router.post("/", validate(usuarioSchema), usuarioController.create);
router.get("/:id", checkAuth, usuarioController.read);
router.put(
  "/:id",
  checkAuth,
  validate(usuarioSchema),
  usuarioController.update
);
router.delete("/:id", checkAuth, usuarioController.remove);

export default router;
