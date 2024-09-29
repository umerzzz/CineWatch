import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const accessToken =
      req.cookies.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!accessToken) {
      return res.status(401).json({ message: "Access token is missing." });
    }

    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid access token." });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Access token has expired." });
    }

    res
      .status(500)
      .json({ message: "An error occurred during token verification." });
  }
};
