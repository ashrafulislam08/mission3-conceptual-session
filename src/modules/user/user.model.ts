import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    unique: [true, `This {VALUE} is already exist`],
  },
  phone: {
    type: String,
    required: [true, "Your phone number is not valid"],
    unique: [true, `This {VALUE} is already exist`],
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: ["Admin", "Customer"],
      message: `{VALUE} is not acceptable`,
    },
    // default: "Customer",
  },
});

const User = model("User", userSchema);

export default User;
