import { Request, Response } from "express";
import User from "./user.model";

export const registerUser = async (req: Request, res: Response) => {
  const payload = req.body;
  const user = new User(payload);
  await user.save();
  res.send({
    success: true,
    message: "User created successfully",
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  res.json({
    success: true,
    message: "Users retrieved successfully!",
    data: users,
  });
};
