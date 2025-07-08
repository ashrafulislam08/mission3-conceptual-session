import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
  const data = await Mango.create(req.body);

  res.json({
    success: true,
    message: "Mango created successfully",
    data,
  });
};

const getMangos = async (req: Request, res: Response) => {
  const mangos = await Mango.find();

  res.json({
    success: true,
    message: "Mangos retrieved successfully",
    data: mangos,
  });
};

export { createMango, getMangos };
