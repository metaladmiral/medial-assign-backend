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

  //   getUserDetails: async (userId: string) => {
  //     try {
  //       const userDetails = await prisma.users.findUnique({
  //         where: {
  //           user_id: userId,
  //         },
  //       });
  //       return userDetails;
  //     } catch (err) {
  //       throw err;
  //     } finally {
  //       prisma.$disconnect;
  //     }
  //   },
};

export default PostDbService;
