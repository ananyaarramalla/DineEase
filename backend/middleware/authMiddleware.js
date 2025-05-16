import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../error/error.js";

export const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid Token", 401));
  }
};
