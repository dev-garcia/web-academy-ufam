"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = require("../controllers/main");
const produto_1 = __importDefault(require("../controllers/produto"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
  res.send("Hello world!");
});
router.get("/lorem", main_1.generateLorem);
router.get("/hb1", main_1.renderHb1);
router.get("/hb2", main_1.renderHb2);
router.get("/hb3", main_1.renderHb3);
router.get("/hb4", main_1.renderHb4);
router.get("/produtos", produto_1.default.index);
router.get("/produtos/create", produto_1.default.create);
router.post("/produtos/save", produto_1.default.save);
router.get("/produtos/edit/:id", produto_1.default.edit);
router.post("/produtos/update/:id", produto_1.default.update);
router.post("/produtos/remove/:id", produto_1.default.remove);
exports.default = router;
