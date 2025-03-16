import { userRegister } from "../controllers/userRegister.js";
import express from "express";

const userRoutes = express.Router();

userRoutes.post("/register", userRegister);

export default userRoutes;
