import express, { Router } from "express";

// import { errorUser, getUsers } from "@/controllers/";
// import { verify } from "@/middleware/auth-middleware";
import { body, validationResult } from "express-validator";
import { mockData } from "../../app";

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
  (req, res) => {
    const newAlbum = req.body;
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
      res.status(400).send({
        data: null,
        status: 400,
        msg: result.array(),
      });
    }
    const parse = {
      id: mockData.length + 2,
      ...newAlbum,
    };

    mockData.push(parse);
    res.send({
      status: 201,
      data: mockData,
      msg: "Success",
    });
  }
);
// Export router; should always export as default
export default router;
