import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { ApiSuccess } from "../utils/ApiSuccess";
import { ApiError } from "../utils/ApiError";
import { Music } from "../models/music-model";
import { Artist } from "../models/artist-model";
import fs from "fs";
import { staticPath } from "../utils/staticPath";

interface CustomRequest extends Request {
  files: {
    [key: string]: Express.Multer.File[];
  } & {
    music?: Express.Multer.File[];
    musicCover?: Express.Multer.File[];
  };
}

class MusicHandler {
  public getMusics = asyncHandler(async (req: Request, res: Response) => {
    const { page = 1, perPage = 12, search = "" } = req.query;
    const query = search ? { name: { $regex: search, $options: "i" } } : {};

    try {
      const musics = await Music.find(query)
        .select("-_id -__v")
        .limit(Number(perPage))
        .skip((Number(page) - 1) * Number(perPage));

      const total = await Music.countDocuments(query);

      const musicsWithFullUrls = musics.map((music) => ({
        ...music.toObject(),
        musicUrl: staticPath(req, "music", music.musicUrl),
        coverImageUrl: staticPath(req, "cover", music.coverImageUrl),
      }));

      res.json(
        new ApiSuccess(200, musicsWithFullUrls, "success", {
          total,
          page: Number(page),
          totalPages: Math.ceil(total / Number(perPage)),
        })
      );
    } catch (e) {
      throw new ApiError(500, "Failed process request");
    }
  });

  public getMusic = asyncHandler(async (req: Request, res: Response) => {
    const { musicId: id } = req.params;

    try {
      const music = await Music.findOne({ id })
        .select("-_id -__v")
        .populate("artist", "avatarUrl username name -_id");
      if (!music) {
        throw new ApiError(404, "Music not found");
      }

      const musicWithFullUrl = {
        ...music.toObject(),
        musicUrl: staticPath(req, "music", music.musicUrl),
        coverImageUrl: staticPath(req, "cover", music.coverImageUrl),
      };

      res.json(new ApiSuccess(200, musicWithFullUrl, "success"));
    } catch (error) {
      res.json(new ApiError(200, "Failed to retrieve music"));
    }
  });
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
