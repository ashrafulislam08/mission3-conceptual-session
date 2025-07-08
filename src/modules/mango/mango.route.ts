import { Router } from "express";
import { createMango, getMangos } from "./mango.controller";

const mangoRouter = Router();

mangoRouter.post("/mango", createMango);
mangoRouter.get("/mangos", getMangos);

export default mangoRouter;
