import { Prisma } from "@prisma/client";
import prisma from "./prisma";
import { Post } from "../types";

const PostDbService = {
  createPost: async (newPostObj: Post) => {
    try {
      return await prisma.post.create({
        data: newPostObj,
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          throw "User Already Exists!";
        }
      }
      if (err instanceof Prisma.PrismaClientInitializationError) {
        throw "Error Connecting to DB";
      }
      throw err;
    } finally {
      prisma.$disconnect;
    }
  },

  getPostsList: async (limit?: number, offset?: number) => {
    try {
      const posts = await prisma.post.findMany({
        orderBy: {
          id: "desc",
        },
      });
      return posts;
    } catch (err) {
      throw err;
    } finally {
      prisma.$disconnect;
    }
  },
  getPostDetails: async (postId: string) => {
    try {
      const userDetails = await prisma.post.findUnique({
        where: {
          postid: postId,
        },
      });
      return userDetails;
    } catch (err) {
      throw err;
    } finally {
      prisma.$disconnect;
    }
  },
};

export default PostDbService;
