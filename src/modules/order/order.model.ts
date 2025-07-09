import { model, Schema } from "mongoose";
import IOrder from "./order.interface";

const addressSchema = new Schema({
  address: { zipCode: String, street: String, country: String, state: String },
});

const orderSchema = new Schema<IOrder>({
  user: {
    type: Schema.Types.ObjectId,
  },
  mango: {
    type: Schema.Types.ObjectId,
  },
  quantity: { type: Number, min: 0, required: true },
  totalPrice: { type: Number, min: 0, required: true },
  status: { type: String, required: true },
  address: { type: addressSchema, required: true },
});

const Order = model("Order", orderSchema);
export default Order;
