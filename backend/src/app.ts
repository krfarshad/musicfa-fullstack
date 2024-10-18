import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";

dotenv.config();
const app = express();

mongoose
  .connect("mongodb://localhost:27017/musicfa_db")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

app.use(express.json());

// saveUninitialized doesn't need save session of users don't have actions
app.use(
  session({
    secret: "farshad dev",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.use(cookieParser("secret"));

const PORT = process.env.PORT || 5000;

export const mockData = [
  { id: 1, name: "first", value: 200 },
  { id: 2, name: "second", value: 2100 },
  { id: 3, name: "third", value: 20 },
  { id: 4, name: "forth", value: 10 },
];

app.get("/", (req, res) => {
  res.status(200).send({ msg: "hello" });
});

declare module "express-session" {
  interface SessionData {
    visited?: boolean; // Make it optional
  }
}

app.get("/api/albums", (req, res) => {
  res.cookie("token", "ads;lfaklshjgalksgag", {
    maxAge: 10 * 60 * 60 * 1,
    signed: true,
  });

  req.session.visited = true;
  const sortOrder = req.query?.sort || "asc";
  const sortedData = mockData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.value - b.value;
    } else if (sortOrder === "desc") {
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

  const album = mockData.find((data) => data.id === parseId);
  if (!album) res.sendStatus(404);
  res.status(200).send(album);
});

app.delete("/api/albums/:id", (req, res) => {
  const { id } = req.params;
  const parseId = parseInt(id);
  const hasData = mockData.find((data) => data.id === parseId);
  if (!hasData) res.sendStatus(404);
  const newData = mockData.filter((data) => data.id != parseId);
  res.send({
    status: 202,
    data: newData,
    msg: "Success",
  });
});

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
