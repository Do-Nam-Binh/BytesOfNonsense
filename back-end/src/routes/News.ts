import express from "express";

const router = express.Router();

//Get news articles
router.get("/", async (req, res) => {
    res.json({ message: "Get news sucessful!" }); //Add logic to get data from MongoDB
});

//Create news articles
router.post("/", async (req, res) => {
    res.json({ message: "Create news sucessful!" }); //Add logic to get data from MongoDB
});

//Remove news articles
router.delete("/", async (req, res) => {
    res.json({ message: "Delete news sucessful!" }); //Add logic to get data from MongoDB
});




// Export the router
export default router;
