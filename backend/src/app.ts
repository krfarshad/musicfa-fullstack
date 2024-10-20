import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import "./strategies/local-strategy";
import { mockData } from "./utils/mockData";

dotenv.config();
const app = express();

mongoose
  .connect("mongodb://db:27017/musicfa")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

app.use(express.json());
app.use(cookieParser("secret"));

app.use(
  session({
    secret: "anson the dev",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send({ msg: "hello" });
});

declare module "express-session" {
  interface SessionData {
    visited?: boolean; // Make it optional
  }
}

app.get("/api/albums", (req, res) => {
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
