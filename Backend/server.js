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
app.use(
  cors({
    origin: "http://localhost:5173", // Or your frontend URL
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
