import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import databaseConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
dotenv.config({ path: ".env" });

databaseConnection();
const port = process.env.PORT || 3000;
const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
