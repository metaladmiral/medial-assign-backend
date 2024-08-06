import { Response, Request } from "express";
import PostDbService from "../../prisma/postDbService";
import { Post } from "../../types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { Buffer } from "buffer";
import { ogImageData } from "../../types";

async function createPost(req: Request, res: Response) {
  if (process.env.SERVER_URL === undefined) {
    return res.send(500);
  }
  const postDetails = req.body;
  const { title, content, img } = postDetails;

  if (!title || !content) {
    return res.status(422).json({
      success: false,
      data: "Title and Content are required",
    });
  }

  const uuid = uuidv4();
  let newPost: Post = {
    title,
    content,
    postid: uuid,
  };
  const ogImageData: ogImageData = {
    title: title,
    content: content,
  };

  if (img) {
    newPost.img = img;
    ogImageData.img = img;
  }

  try {
    const user = await PostDbService.createPost(newPost);

    const og_img = await axios.post(
      process.env.SERVER_URL + "/v1/generate-og-image",
      {
        responseType: "arraybuffer",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    const buffer = Buffer.from(og_img.data, "binary");

    const imagePath = "./public/og-images/" + uuid + ".jpg";
    const writer = fs.createWriteStream(imagePath);
    writer.write(buffer);
    writer.end();

    return res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      data: err,
    });
  }
}

export default createPost;
