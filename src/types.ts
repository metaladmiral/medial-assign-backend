import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestWithUser extends Request {
  user?: JwtPayload; // Define the user property as optional
}

export type UserUpdateObj = {
  web_push_subscription?: string;
  last_login?: Date;
};
