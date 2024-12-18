import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  releaseDate: {
    type: Date,
  },
  tracks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Music",
    },
  ],
  coverImageUrl: {
    type: String,
  },
  description: {
    type: String,
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

export const Album = mongoose.model("Album", albumSchema);
