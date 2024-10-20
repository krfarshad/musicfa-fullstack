import { RequestHandler } from "express";

export const isAuthenticated: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(403).json({
    data: null,
    status: 403,
    msg: "Unauthorized access",
  });
};
