import { Response, Request } from "express";
import PostDbService from "../../prisma/postDbService";

async function getPostsList(req: Request, res: Response) {
  try {
    const user = await PostDbService.getPostsList();
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

export default getPostsList;
