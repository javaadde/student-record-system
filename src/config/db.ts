import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const dbHost = process.env.DATA_BASE_URL;

const connectDB = async () => {
  try {
    if (!dbHost) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(dbHost);
     return "connected to mogodb ƪ(˘⌣˘)ʃ"
  } catch (error) {
    console.log("error happen during connecting to mogodb (˘･_･˘):", error);
  }
};

export default connectDB;
