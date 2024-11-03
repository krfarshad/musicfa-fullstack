import mongoose from "mongoose";
import Counter from "../utils/counter";

const artistSchema = new mongoose.Schema({
  artistId: { type: Number, unique: true },
  name: {
    type: String,
    required: [true, "Artist name cannot be empty"],
    validate: {
      validator: (value: string) => value.trim().length > 0,
      message: "Artist name cannot be empty",
    },
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username cannot be empty"],

    validate: {
      validator: (value: string) => value.trim().length > 0,
      message: "Username cannot be empty",
    },
  },

  bio: {
    type: String,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

artistSchema.pre("save", async function (next) {
  const artist = this;
  if (artist.isNew) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { model: "Artist" },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
      );
      artist.id = counter.count;
      next();
    } catch (error) {
      next(error as any);
    }
  } else {
    next();
  }
});

export const Artist = mongoose.model("Artist", artistSchema);
