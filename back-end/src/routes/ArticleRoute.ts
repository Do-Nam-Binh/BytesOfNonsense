import { Router } from "express";
import {
  createArticle,
  getArticles,
  getArticlesById,
} from "../controllers/ArticleController";

const router = Router();

router.get("/", getArticles);
// router.get("/:id", getArticlesById);
router.post("/", createArticle);

export default router;
