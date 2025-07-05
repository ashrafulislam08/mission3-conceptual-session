import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import config from "./config";

const app = express();

app.use(cors());
app.use(express.json());

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
