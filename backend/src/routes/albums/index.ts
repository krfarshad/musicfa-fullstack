import express, { Router } from "express";

// import { errorUser, getUsers } from "@/controllers/";
// import { verify } from "@/middleware/auth-middleware";
import { body, validationResult } from "express-validator";

const router = Router();
// Setup all routes for user
// router.get("/api/albums", verify, getUsers);

// Setup all routes for user
// router.get("/error", errorUser);

router.post(
  "/api/albums",
  body("name")
    .notEmpty()
    .withMessage("Username must not be empty!")
    .isString()
    .withMessage("Name must be string!"),
  (req, res) => {}
);
// Export router; should always export as default
export default router;
