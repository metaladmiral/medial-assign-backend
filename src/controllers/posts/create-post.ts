import { Response, Request } from "express";
import PostDbService from "../../prisma/postDbService";
import { Post } from "../../types";

async function createPost(req: Request, res: Response) {
  const postDetails = req.body;
  const { title, content, img } = postDetails;

  if (!title || !content) {
    return res.status(422).json({
      success: false,
      data: "Title and Content are required",
    });
  }
  let newPost: Post = {
    title,
    content,
  };

  if (img) {
    newPost.img = img;
  }

  try {
    const user = await PostDbService.createPost(newPost);
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
