import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  model: { type: String, required: true },
  count: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;