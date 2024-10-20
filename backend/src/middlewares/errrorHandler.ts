import { NextFunction, Response, Request } from "express";

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

  next();
};
