import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import config from "./config";
import userRoute from "./modules/user/user.route";
import mangoRouter from "./modules/mango/mango.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(mangoRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "I am here.",
  });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

async function server() {
  try {
    await mongoose.connect(config.mongodb_uri as string);
    console.log("Database is connected!");
  } catch (error) {
    console.log(error);
  }
}

server();
