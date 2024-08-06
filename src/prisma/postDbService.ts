import { Prisma } from "@prisma/client";
import prisma from "./prisma";
import { UserUpdateObj } from "../types";

const PostDbService = {
  createPost: async (
    user_id: string,
    name: string,
    phone: string,
    state: string,
    password: string,
    occupation?: string,
    webpush?: string
  ) => {
    try {
      return await prisma.users.create({
        data: {
          user_id: user_id,
          name: name,
          phone: phone,
          occupation: occupation || null,
          web_push_subscription: webpush,
          password: password,
          state: state,
        },
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
