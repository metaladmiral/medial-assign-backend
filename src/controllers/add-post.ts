import { Response, Request } from "express";
import PostDbService from "../prisma/postDbService";

async function createPost(req: Request, res: Response) {
  res.send(req.body);
  //   let subscription = req.body;/
  //   try {
  //     const user = await PostDbService.createPost(user_id, userUpdateObj);
  //     return res.json({
  //       success: true,
  //       data: user,
  //     });
  //   } catch (err) {
  //     return res.status(500).json({
  //       success: false,
  //       data: err,
  //     });
  //   }
}

export default createPost;
