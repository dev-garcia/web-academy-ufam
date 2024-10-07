import { Request, Response } from "express";
import axios from "axios";
import { CreateProdutoDto, Produto } from "../types/produto";

const index = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get<Produto[]>(
      `${process.env.DB_SERVER}/produtos`,
    );
    res.render("produtos/index", { data, layout: "main" });
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};

const create = async (req: Request, res: Response) => {
  res.render("produtos/create", { layout: "main" });
};

const save = async (req: Request, res: Response) => {
  const produto = req.body as CreateProdutoDto;
  try {
    await axios.post(`${process.env.DB_SERVER}/produtos`, produto);
    res.redirect("/produtos");
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};

const edit = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get<Produto>(
      `${process.env.DB_SERVER}/produtos/${id}`,
    );
    res.render("produtos/edit", { produto: data, layout: "main" });
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto = req.body as CreateProdutoDto;
  try {
    await axios.put(`${process.env.DB_SERVER}/produtos/${id}`, produto);
    res.redirect("/produtos");
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await axios.delete(`${process.env.DB_SERVER}/produtos/${id}`);
    res.redirect("/produtos");
  } catch (err) {
    res.status(500).json(err);
    console.log("Deu erro");
  }
};

export default { index, create, save, edit, update, remove };
