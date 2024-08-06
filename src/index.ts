import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createPost } from "./controllers/controllers";

const globalRouter = express.Router();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/v1", globalRouter);

dotenv.config();

globalRouter.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

globalRouter.post("/create-post", (req, res) => {
  createPost(req, res);
});
globalRouter.get("/get-post-list", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});
globalRouter.get("/get-post-details", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
