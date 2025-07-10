import { Router } from "express";
import userRoute from "../user/user.route";
import mangoRouter from "../mango/mango.route";
import orderRoute from "../order/order.route";

const routes = Router();

routes.use(userRoute);
routes.use(mangoRouter);
routes.use("/order", orderRoute);

export default routes;
