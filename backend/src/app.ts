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
import helmet from "helmet";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from "./utils/swager-doc";
import swaggerUi from "swagger-ui-express";
import { setCSRFTokenCookie } from "./middlewares/set-crf-middleware";

const session = require("express-session");

const app: express.Application = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser("secret"));
app.use(setCSRFTokenCookie);

app.use(
  session({
    secret: "default session",
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
app.use(cors());
app.use(helmet());

app.use("/api/v1/", routes);
app.use(errorHandler);
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = config.port || 5000;
app.listen(5000, () => {
  logger.info(`server is running in ${port}`);
});
