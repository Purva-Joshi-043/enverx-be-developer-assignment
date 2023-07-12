import mongoose from "mongoose";

const dbUri: string = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/blogs";
const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
