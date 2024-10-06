import express, { Express } from "express";
import cors from "cors";
import connectMongoDB from "./config/MongoDBConnection";
import newsRoutes from "./routes/ArticleRoute"; // Import the news routes

// Setup cors & express
const app: Express = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB database
connectMongoDB();

// Use the news routes with the /api/news prefix
app.use("/api/articles", newsRoutes);

app.listen(5000, () => {
  console.log("Server is running on localhost:5000");
});
