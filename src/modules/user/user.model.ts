import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "Customer"],
    default: "Customer",
  },
});

const User = model("User", userSchema);

export default User;
