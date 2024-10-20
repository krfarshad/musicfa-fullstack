import express from "express";
import routes from "./routes/routes";
import cookieParser from "cookie-parser";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import "./strategies/local-strategy";
import "./database";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errrorHandler";

const { session } = require("express-session");

const app: express.Application = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser("secret"));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default session",
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

app.use("/api/v1/", routes);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
