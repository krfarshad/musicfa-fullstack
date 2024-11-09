import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { ApiSuccess } from "../utils/ApiSuccess";
import { ApiError } from "../utils/ApiError";
import { Music } from "../models/music-model";
import { Artist } from "../models/artist-model";
import fs from "fs";

interface CustomRequest extends Request {
  files: {
    [key: string]: Express.Multer.File[];
  } & {
    music?: Express.Multer.File[];
    musicCover?: Express.Multer.File[];
  };
}

class MusicHandler {
  public getMusics = asyncHandler(async (req: Request, res: Response) => {});
  public getMusic = asyncHandler(async (req: Request, res: Response) => {});
  public removeMusic = asyncHandler(async (req: Request, res: Response) => {});
  public updateMusic = asyncHandler(async (req: Request, res: Response) => {});
  public addMusic = asyncHandler(async (req: Request, res: Response) => {
    if (!req || !req.files) {
      throw new ApiError(404, "Resource not found");
    }
    const customReq = req as CustomRequest;
    const { artist, title } = req.body;

    const artistObject = await Artist.findOne({ username: artist });

    if (!artist) {
      res.status(404).json(new ApiError(404, "Artist not found"));
    }

    const musicUrl = customReq.files.music?.[0]?.filename;
    const coverImageUrl = customReq.files.musicCover?.[0]?.filename;
    try {
      const newMusic = new Music({
        artist: artistObject?._id,
        title,
        musicUrl: musicUrl,
        coverImageUrl: coverImageUrl,
      });

      const savedSong = await newMusic.save();
      res
        .status(201)
        .send(new ApiSuccess(201, newMusic, "Uploaded successfully"));
    } catch (error: any) {
      if (musicUrl)
        fs.unlink(musicUrl, (err) => {
          if (err) console.error("Failed to delete music file:", err);
        });
      res
        .status(500)
        .send(
          new ApiError(500, error?.message ?? "Sth wrong with upload file")
        );
    }
  });
}

export const MusicController = new MusicHandler();
