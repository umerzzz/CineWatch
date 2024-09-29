import express from "express";
import { connect_DB } from "./Database/DatabaseConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { AuthRouter } from "./routes/Auth.routes.js";
import { WatchListRouter } from "./routes/WatchList.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/v1", AuthRouter);
app.use("/api/v1", WatchListRouter);

//running server
const runServer = async () => {
  try {
    await connect_DB();
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
runServer();
