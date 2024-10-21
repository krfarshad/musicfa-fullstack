import express from "express";
import routes from "./routes/routes";
import cookieParser from "cookie-parser";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import "./utils/passport";
import "./database";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errrorHandler";
import logger from "./utils/logger";
import { config } from "./config/global.config";
import session from "express-session";

const app: express.Application = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser("secret"));

app.use(
  // @ts-ignore
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
app.listen(config.port, () => {
  logger.info(`server is running in ${config.port}`);
});
