"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { errorUser, getUsers } from "@/controllers/";
// import { verify } from "@/middleware/auth-middleware";
const express_validator_1 = require("express-validator");
const app_1 = require("../../app");
const router = (0, express_1.Router)();
// Setup all routes for user
// router.get("/api/albums", verify, getUsers);
// Setup all routes for user
// router.get("/error", errorUser);
router.post("/api/albums", (0, express_validator_1.body)("name")
    .notEmpty()
    .withMessage("Username must not be empty!")
    .isString()
    .withMessage("Name must be string!"), (req, res) => {
    const newAlbum = req.body;
    const result = (0, express_validator_1.validationResult)(req);
    console.log(result);
    if (!result.isEmpty()) {
        res.status(400).send({
            data: null,
            status: 400,
            msg: result.array(),
        });
    }
    const parse = {
        id: app_1.mockData.length + 2,
        ...newAlbum,
    };
    app_1.mockData.push(parse);
    res.send({
        status: 201,
        data: app_1.mockData,
        msg: "Success",
    });
});
// Export router; should always export as default
exports.default = router;
