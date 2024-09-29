import { User } from "../models/User.model.js";
import bcrypt from "bcrypt";

const generateAccessAndRefreshToken = async (userID) => {
  const createdUser = await User.findById(userID);
  const accessToken = createdUser.generateAccessToken();
  const refreshToken = createdUser.generateRefreshToken();
  createdUser.refreshToken = refreshToken;
  await createdUser.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
};

export const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    if (!userName || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    const isCorrectPass = await user.isPasswordCorrect(password);
    if (!isCorrectPass) {
      return res.status(401).json({ message: "Incorrect Password/Username." });
    }

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set secure cookies in production
    };

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(loggedInUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

export const register = async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;
  try {
    if (!firstName || !lastName || !userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const encryptedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: encryptedPassword,
    });

    if (!user) {
      throw new Error("Internal Server Error");
    }

    const createdUser = await User.findOne({ email }).select(
      "-password -refreshToken"
    );
    return res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during registration." });
  }
};

export const logout = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    user.refreshToken = undefined;
    await user.save();

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ message: "User logged out." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during logout." });
  }
};
