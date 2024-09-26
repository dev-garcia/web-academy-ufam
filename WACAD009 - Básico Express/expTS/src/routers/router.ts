import { Router } from "express";
import { generateLorem } from "../controllers/main";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/lorem", generateLorem);

export default router;
