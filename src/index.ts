import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  createPost,
  generateOgImage,
  getPostsList,
} from "./controllers/controllers";
import fileUploadMiddleware from "./middlewares/fileUploadMiddleware";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

const globalRouter = express.Router();
app.use("/v1", globalRouter);

app.use("/public", express.static("public"));

dotenv.config();

globalRouter.post("/create-post", fileUploadMiddleware(), (req, res) => {
  createPost(req, res);
});
globalRouter.get("/get-posts-list", (req, res) => {
  getPostsList(req, res);
});
globalRouter.get("/get-post-details", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});
globalRouter.post("/generate-og-image", (req, res) => {
  generateOgImage(req, res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
