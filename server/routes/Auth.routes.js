import express from "express";
import { login, logout, register } from "../controllers/Auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const AuthRouter = express.Router();
AuthRouter.post("/login", login);
AuthRouter.post("/register", register);
AuthRouter.post("/logout", verifyJWT, logout);
export { AuthRouter };
