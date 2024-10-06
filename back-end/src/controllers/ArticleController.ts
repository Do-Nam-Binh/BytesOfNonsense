import { Request, Response } from "express";
import Article from "../models/ArticleModel";

//Get all articles
export const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await Article.find(); // Fetch all articles from the database
    res.status(200).json(articles); // Send back the articles
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred." });
    }
  }
};

// Get articles by id
export const getArticlesById = async (req: Request, res: Response) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the article." });
  }
};

// export const getArticlesById = async (req: Request, res: Response) => {
//     const article = await Article.findById(req.params.id);

//   res.send(`Article ID: ${req.params.id}`);
// };

//Create news articles
export const createArticle = async (req: Request, res: Response) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).json(newArticle); // Send back the created article
  } catch (error) {
    // Handle the error properly
    if (error instanceof Error) {
      // Check if the error is an instance of Error
      res.status(400).json({ message: error.message }); // Send back error message
    } else {
      res.status(500).json({ message: "An unknown error occurred." }); // Handle unexpected errors
    }
  }
};
