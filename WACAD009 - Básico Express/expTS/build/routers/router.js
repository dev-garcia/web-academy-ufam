"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = require("../controllers/main");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
  res.send("Hello world!");
});
router.get("/lorem", main_1.generateLorem);
exports.default = router;
