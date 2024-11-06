import { Router } from "express";
import userController from "./user.controller";
import useSchema from "./user.schema";

import { validate } from "../../middlewares/validate";

const router = Router();

router.get("/", userController.index);
router.post("/", validate(useSchema), userController.create);
router.get("/", userController.read);
router.put("/", userController.update);
router.delete("/", userController.remove);

export default router;
