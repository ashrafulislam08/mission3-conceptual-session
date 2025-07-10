import { Request, Response } from "express";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    let order = await Order.create(req.body);
    order = await order.populate("user");
    order = await order.populate("mango");
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

const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.json({
      success: true,
      message: "Orders retrieved successfully",
      data: orders,
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
  getOrders,
};
