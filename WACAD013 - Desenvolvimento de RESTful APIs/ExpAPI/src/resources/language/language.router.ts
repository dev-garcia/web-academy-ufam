import { Router } from "express";

import { validate } from "../../middlewares/validate";
import changeLanguageSchema from "./language.schema";
import LanguageController from "./language.controller";

const router = Router();

router.post(
  "/language",
  validate(changeLanguageSchema),
  LanguageController.changeLanguage
);

export default router;
