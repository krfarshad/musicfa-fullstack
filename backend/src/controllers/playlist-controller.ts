import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ApiSuccess } from "../utils/ApiSuccess";
import { ApiError } from "../utils/ApiError";
import { Playlist } from "../database/models/playlist-model";

class PlaylistHandler {
  public getPlaylists = asyncHandler(async (req: Request, res: Response) => {
    const { page = 1, perPage = 12, search = "" } = req.query;
    const query = search ? { title: { $regex: search, $options: "i" } } : {};
    const playlists = await Playlist.find(query)
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage));
    const total = await Playlist.countDocuments(query);
    res.json(
      new ApiSuccess(200, playlists, "Playlists retrieved successfully.", {
        total,
        page: Number(page),
        totalPages: Math.ceil(total / Number(perPage)),
      })
    );
  });

  public getUserPlaylists = asyncHandler(
    async (req: Request, res: Response) => {
      const { userId } = req.params;
      const playlists = await Playlist.find({ user: userId });
      if (!playlists.length) {
        res
          .status(404)
          .json(new ApiError(404, "No playlists found for this user."));
      }
      res.json(
        new ApiSuccess(200, playlists, "User playlists retrieved successfully.")
      );
    }
  );

  public getUserPlaylist = asyncHandler(async (req: Request, res: Response) => {
    const { userId, id } = req.params;
    const playlist = await Playlist.findOne({ _id: id, user: userId });
    if (!playlist) {
      res.status(404).json(new ApiError(404, "Playlist not found."));
    }
    res.json(new ApiSuccess(200, playlist, "Playlist retrieved successfully."));
  });

  public removePlaylist = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const playlist = await Playlist.findByIdAndDelete(id);
    if (!playlist) {
      res.status(404).json(new ApiError(404, "Playlist not found."));
    }
    res.status(204).json({ message: "Playlist deleted successfully." });
  });

  public updatePlaylist = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const playlist = await Playlist.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!playlist) {
      res.status(404).json(new ApiError(404, "Playlist not found."));
    }
    res.json(new ApiSuccess(200, playlist, "Playlist updated successfully."));
  });

  public addPlaylist = asyncHandler(async (req: Request, res: Response) => {
    const newPlaylist = new Playlist(req.body);
    await newPlaylist.save();
    res
      .status(201)
      .json(new ApiSuccess(201, newPlaylist, "Playlist added successfully."));
  });

  public addToPlaylist = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { songId } = req.body;
    const playlist = await Playlist.findByIdAndUpdate(
      id,
      { $addToSet: { songs: songId } },
      { new: true }
    );
    if (!playlist) {
      res.status(404).json(new ApiError(404, "Playlist not found."));
    }
    res.json(
      new ApiSuccess(200, playlist, "Song added to playlist successfully.")
    );
  });
}

export const PlaylistController = new PlaylistHandler();
