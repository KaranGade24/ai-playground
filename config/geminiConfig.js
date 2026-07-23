import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY;

export const AI = new GoogleGenAI({
  apiKey: apiKey,
});
