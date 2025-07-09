import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
  try {
    const data = await Mango.create(req.body);

    res.json({
      success: true,
      message: "Mango created successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error,
    });
  }
};

const getMangos = async (req: Request, res: Response) => {
  try {
    const mangos = await Mango.find();

    res.json({
      success: true,
      message: "Mangos retrieved successfully",
      data: mangos,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error,
    });
  }
};

const getSingleMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const mango = await Mango.findById(mangoId);
    res.json({
      success: true,
      message: "Mango retrieved successfully",
      data: mango,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error,
    });
  }
};

const updateMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const updatedMango = await Mango.findByIdAndUpdate(mangoId, req.body, {
      new: true,
    });

    res.json({
      success: true,
      message: "Mango updated successfully",
      data: updatedMango,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error,
    });
  }
};

const deleteMango = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const deletedMango = await Mango.findByIdAndDelete(mangoId, {
      new: true,
    });
    res.json({
      success: true,
      message: "Mango deleted successfully",
      data: deletedMango,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error,
    });
  }
};

export { createMango, getMangos, getSingleMango, updateMango, deleteMango };
