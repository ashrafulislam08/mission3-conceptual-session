import { Router } from "express";
import userRoute from "../user/user.route";
import mangoRouter from "../mango/mango.route";

const routes = Router();

routes.use(userRoute);
routes.use(mangoRouter);

export default routes;
