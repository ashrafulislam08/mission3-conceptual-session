import { Request, Response } from "express";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.create(req.body);
    res.json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error,
    });
  }
};

export const orderControllers = {
  createOrder,
};
