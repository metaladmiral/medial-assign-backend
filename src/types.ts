import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestWithUser extends Request {
  user?: JwtPayload; // Define the user property as optional
}

export type Post = {
  title: string;
  content: string;
  img_url?: string;
  created_at?: Date;
  updated_at?: Date;
};
