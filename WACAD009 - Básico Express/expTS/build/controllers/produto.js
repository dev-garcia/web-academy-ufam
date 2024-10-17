"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const index = async (req, res) => {
  try {
    const { data } = await axios_1.default.get(
      `${process.env.DB_SERVER}/produtos`,
    );
    res.render("produtos/index", { data, layout: "main" });
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};
const create = async (req, res) => {
  res.render("produtos/create", { layout: "main" });
};
const save = async (req, res) => {
  const produto = req.body;
  try {
    await axios_1.default.post(`${process.env.DB_SERVER}/produtos`, produto);
    res.redirect("/produtos");
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};
const edit = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios_1.default.get(
      `${process.env.DB_SERVER}/produtos/${id}`,
    );
    res.render("produtos/edit", { produto: data, layout: "main" });
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  const produto = req.body;
  try {
    await axios_1.default.put(
      `${process.env.DB_SERVER}/produtos/${id}`,
      produto,
    );
    res.redirect("/produtos");
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await axios_1.default.delete(`${process.env.DB_SERVER}/produtos/${id}`);
    res.redirect("/produtos");
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};
exports.default = { index, create, save, edit, update, remove };
