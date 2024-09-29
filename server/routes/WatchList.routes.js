import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createItem,
  deleteItem,
  displayWatchList,
  editItem,
} from "../controllers/WatchList.controller.js";
const WatchListRouter = express.Router();
WatchListRouter.get("/display", verifyJWT, displayWatchList);
WatchListRouter.post("/create", verifyJWT, createItem);
WatchListRouter.delete("/delete/:id", verifyJWT, deleteItem);
WatchListRouter.put("/update/:id", verifyJWT, editItem);

export { WatchListRouter };
