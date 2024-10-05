import express from "express";
import cors from "cors";
import connectMongoDB from "./config/database";

//Setup cors & express
const app = express();

app.use(express.json())
app.use(cors());

//Connect to MongoDB database
connectMongoDB().catch(console.dir);

app.get("/api/news", async (req, res) => {
    res.json({message: "Success!"})
}) 

app.listen(5000, () => {
    console.log("Server is running on localhost:5000")
})