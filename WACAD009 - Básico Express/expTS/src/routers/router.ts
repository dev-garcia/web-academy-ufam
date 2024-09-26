import { Router } from "express";
import {
  generateLorem,
  renderHb1,
  renderHb2,
  renderHb3,
  renderHb4,
} from "../controllers/main";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/lorem", generateLorem);

router.get("/hb1", renderHb1);
router.get("/hb2", renderHb2);
router.get("/hb3", renderHb3);

router.get("/hb4", renderHb4);

export default router;
