import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});

async function server() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database is connected!");
  } catch (error) {
    console.log(error);
  }
}

server();
