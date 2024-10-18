"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockData = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_validator_1 = require("express-validator");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(routes);
// app.use(cookieParser());
const PORT = process.env.PORT || 5000;
exports.mockData = [
    { id: 1, name: "first", value: 200 },
    { id: 2, name: "second", value: 2100 },
    { id: 3, name: "third", value: 20 },
    { id: 4, name: "forth", value: 10 },
];
app.get("/", (req, res) => {
    res.status(200).send({ msg: "hello" });
});
app.get("/api/albums", (0, express_validator_1.query)("filter")
    .isString()
    .notEmpty()
    .withMessage("It can't be empty!")
    .isLength({ min: 3, max: 4 })
    .withMessage("Must be between three to 4 characters"), (req, res) => {
    const result = (0, express_validator_1.validationResult)(req);
    console.log("result", result);
    const reqCookie = req.cookies();
    const sortOrder = req.query?.sort || "asc";
    res.cookie("token", "askdjfashdg5ahsdgjh", { maxAge: 10 * 60 * 60 });
    const sortedData = exports.mockData.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.value - b.value;
        }
        else if (sortOrder === "desc") {
            return b.value - a.value;
        }
        return 0;
    });
    res.status(200).send({
        status: 200,
        data: sortedData,
        msg: "",
    });
});
app.get("/api/albums/:id", (req, res) => {
    // valid number
    const parseId = parseInt(req.params.id);
    if (isNaN(parseId)) {
        res.status(400).send({
            status: 400,
            data: null,
            msg: "Bad request! just request for numbers",
        });
    }
    const album = exports.mockData.find((data) => data.id === parseId);
    if (!album)
        res.sendStatus(404);
    res.status(200).send(album);
});
app.delete("/api/albums/:id", (req, res) => {
    const { id } = req.params;
    const parseId = parseInt(id);
    const hasData = exports.mockData.find((data) => data.id === parseId);
    if (!hasData)
        res.sendStatus(404);
    const newData = exports.mockData.filter((data) => data.id != parseId);
    res.send({
        status: 202,
        data: newData,
        msg: "Success",
    });
});
app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`);
});
