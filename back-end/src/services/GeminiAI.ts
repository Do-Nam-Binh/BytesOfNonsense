// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config();

const geminiAPIKey: string = process.env.GEMINI_APIKEY || "";

async function generateArticle(promt: string) {
  const genAI = new GoogleGenerativeAI(geminiAPIKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  const result = await model.generateContent(promt);
  console.log(result.response.text());
}

export default generateArticle;
