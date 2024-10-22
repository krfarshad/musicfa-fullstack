import { NextFunction, Request, Response } from "express";

export const CSRFMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const csrfTokenFromCookie = req.cookies["csrfToken"];
  const csrfTokenFromHeader = req.headers["x-csrf-token"];

  if (!csrfTokenFromCookie || !csrfTokenFromHeader) {
    res.status(403);
    throw new Error("CSRF token missing");
  }

  if (csrfTokenFromCookie !== csrfTokenFromHeader) {
    res.status(403);
    throw new Error("Invalid CSRF token");
  }
  next();
};
