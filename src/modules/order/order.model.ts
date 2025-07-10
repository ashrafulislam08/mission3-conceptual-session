import { model, Schema } from "mongoose";
import IOrder from "./order.interface";
import Mango from "../mango/mango.model";

const addressSchema = new Schema({
  zipCode: String,
  street: String,
  country: String,
  state: String,
});

const orderSchema = new Schema<IOrder>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  mango: {
    type: Schema.Types.ObjectId,
    ref: "Mango",
  },
  quantity: { type: Number, min: 0, required: true },
  totalPrice: { type: Number, min: 0 },
  status: { type: String, required: true },
  address: { type: addressSchema, required: true },
});

orderSchema.pre("save", async function () {
  const mango = await Mango.findById(this.mango);
  if (!mango) throw new Error("Mango not found");

  this.totalPrice = mango.price * this.quantity;
});

const Order = model("Order", orderSchema);
export default Order;
