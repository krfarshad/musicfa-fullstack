import mongoose from "mongoose";
import logger from "../utils/logger";

mongoose
  .connect("mongodb://db:27017/musicfa")
  .then(() => logger.info("Connected to Database"))
  .catch((err) => logger.error(`Error: ${err}`));
