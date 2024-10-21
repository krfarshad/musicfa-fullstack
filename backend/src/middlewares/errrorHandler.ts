import { NextFunction, Response, Request } from "express";
import logger from "../utils/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.status ? res.status : 500;

  res.json({
    data: null,
    status: statusCode,
    msg: err,
    stackTrace: err.stack,
  });

  if (statusCode == 500) {
    logger.error(err);
  }

  next();
};
