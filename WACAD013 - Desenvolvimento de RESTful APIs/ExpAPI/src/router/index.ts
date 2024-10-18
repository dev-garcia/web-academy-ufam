import { Router } from "express";
import v1Router from "./routerV1";
import v2Router from "./routerV2";

const router = Router();

router.use("/v1", v1Router);
router.use("/v2", v2Router);

export default router;
