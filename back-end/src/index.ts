import express from "express";
import cors from "cors";
import connectMongoDB from "./config/database";
import newsRoutes from "./routes/News"; // Import the news routes

// Setup cors & express
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB database
connectMongoDB().catch(console.dir);

// Use the news routes with the /api/news prefix
app.use("/api/news", newsRoutes); 

app.listen(5000, () => {
    console.log("Server is running on localhost:5000");
});
