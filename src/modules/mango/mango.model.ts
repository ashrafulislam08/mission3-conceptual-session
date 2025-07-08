import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required."],
    },
    variety: {
      type: String,
      trim: true,
      required: [true, "Variety is required"],
    },
    unit: {
      type: String,
      enum: ["KG", "TON"],
      default: "KG",
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    stock: {
      type: Number,
      min: 0,
      required: true,
    },
    origin: String,
    season: {
      type: String,
      enum: ["Winter", "Summer"],
    },
  },
  {
    timestamps: true,
  }
);

const Mango = model("Mango", mangoSchema);

export default Mango;
