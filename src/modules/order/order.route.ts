import { Router } from "express";
import { orderControllers } from "./order.controller";

const orderRoute = Router();

orderRoute.post("/", orderControllers.createOrder);
orderRoute.get("/", orderControllers.getOrders);

export default orderRoute;
