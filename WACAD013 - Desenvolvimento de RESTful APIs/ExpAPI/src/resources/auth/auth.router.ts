import { Router } from "express";
import authController from "./auth.controller";
import { validate } from "../../middlewares/validate";
import { LoginSchema } from "./auth.schema";

const router = Router();

router.post("/login", validate(LoginSchema), authController.login);

router.post("/logout", authController.logout);

export default router;
