// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";

  // Hide details in production if not an AppError
  if (process.env.NODE_ENV === "production" && !(err instanceof AppError)) {
    statusCode = 500;
    message = "Internal server error";
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};
