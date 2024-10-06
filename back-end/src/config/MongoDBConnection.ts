import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const mongoUri: string = process.env.MONGODB_URI || "";

async function connectMongoDB() {
  try {
    // Connect to the MongoDB server using Mongoose
    await mongoose.connect(mongoUri);

    console.log("Successfully connected to MongoDB using Mongoose!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectMongoDB;
