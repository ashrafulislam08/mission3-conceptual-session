import { Router } from "express";
import {
  createMango,
  deleteMango,
  getMangos,
  getSingleMango,
  updateMango,
} from "./mango.controller";

const mangoRouter = Router();

mangoRouter.post("/mango", createMango);
mangoRouter.get("/mangos", getMangos);
mangoRouter.get("/mango/:mangoId", getSingleMango);
mangoRouter.put("/mango/:mangoId", updateMango);
mangoRouter.delete("/mango/:mangoId", deleteMango);

export default mangoRouter;
