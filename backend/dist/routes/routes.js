"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes = require("express").Router();
const index_1 = __importDefault(require("./albums/index"));
routes.use(index_1.default);
// routes.get("/", (req, res) => {
//   res.status(200).json({ message: "Connected!" });
// });
exports.default = routes;
