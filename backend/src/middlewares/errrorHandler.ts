import { NextFunction, Response, Request } from "express";
import logger from "../utils/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.status ? res.status : 500;

  if (statusCode == 500) {
    logger.error(err);
  }

  next();
};
