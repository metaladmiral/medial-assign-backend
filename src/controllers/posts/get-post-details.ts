import { Response, Request } from "express";
import PostDbService from "../../prisma/postDbService";

async function getPostDetails(req: Request, res: Response) {
  const postId = req.params.postid as string;

  if (!postId) {
    return res.send(400).json({ success: false, data: "Post ID is required" });
  }

  try {
    const post = await PostDbService.getPostDetails(postId);
    return res.json({
      success: true,
      data: post,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      data: err,
    });
  }
}

export default getPostDetails;
