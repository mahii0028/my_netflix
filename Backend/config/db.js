import mongoose from "mongoose";

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default databaseConnection;
