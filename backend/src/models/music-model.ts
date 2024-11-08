import mongoose from "mongoose";
import Counter from "../utils/counter";

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Music title is require"],
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: [true, "Music artist is require"],
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
  },
  musicUrl: {
    type: String,
    required: [true, "Music file is require"],
  },
  coverImageUrl: {
    type: String,
    required: [true, "Music cover image is require"],
  },
  playCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

musicSchema.pre("save", async function (next) {
  const music = this;
  if (music.isNew) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { model: "Music" },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
      );
      music.id = counter.count;
      next();
    } catch (error) {
      next(error as any);
    }
  } else {
    next();
  }
});

export const Music = mongoose.model("Music", musicSchema);
