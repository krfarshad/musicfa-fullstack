import mongoose from "mongoose";

mongoose
  .connect("mongodb://db:27017/musicfa")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));
