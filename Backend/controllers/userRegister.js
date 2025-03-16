import { User } from "../models/userModel.js";

export const userRegister = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "This email is already used",
        success: false,
      });
    }

    await User.create({
      userName,
      email,
      password,
    });
    return res.status(200).json({
      message: "Account created successfully",
      succes: true,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
