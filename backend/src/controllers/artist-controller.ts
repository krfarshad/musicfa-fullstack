import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { ApiSuccess } from "../utils/ApiSuccess";
import { ApiError } from "../utils/ApiError";
import { Artist } from "../models/artist-model";
import { staticPath } from "../utils/staticPath";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

class ArtistHandler {
  public getArtists = asyncHandler(async (req: Request, res: Response) => {
    const { page = 1, perPage = 12, search = "" } = req.query;

    const query = search ? { name: { $regex: search, $options: "i" } } : {};

    const artists = await Artist.find(query)
      .select("-_id -__v")
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage));

    const total = await Artist.countDocuments(query);

    const artistsWithFullUrls = artists.map((artist) => ({
      ...artist.toObject(),
      avatarUrl: staticPath(req, "artistAvatar", artist.avatarUrl),
    }));

    res.json(
      new ApiSuccess(200, artistsWithFullUrls, "success", {
        total,
        page: Number(page),
        totalPages: Math.ceil(total / Number(perPage)),
      })
    );
  });

  public getArtist = asyncHandler(async (req: Request, res: Response) => {
    const { username } = req.params;

    try {
      const artist = await Artist.findOne({ username }).select("-_id -__v");
      if (!artist) {
        throw new ApiError(404, "Music not found");
      }

      const musicWithFullUrl = {
        ...artist.toObject(),
        avatarUrl: staticPath(req, "artistAvatar", artist.avatarUrl),
      };

      res.json(new ApiSuccess(200, musicWithFullUrl, "success"));
    } catch (error) {
      res.json(new ApiError(200, "Failed to retrieve music"));
    }
  });

  public updateArtist = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;

    const artist = await Artist.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!artist) {
      throw new ApiError(404, "Artist not found.");
    }

    res.json(new ApiSuccess(200, artist, "Artist updated successfully."));
  });

  public addArtist = asyncHandler(async (req: MulterRequest, res: Response) => {
    const { name, username, bio } = req.body;

    if (!req.file) {
      throw new ApiError(404, "Resource not found");
    }

    const existingArtist = await Artist.findOne({ username });
    if (existingArtist) {
      throw new ApiError(409, "Username is already taken");
    }

    const newArtist = new Artist({
      name,
      username,
      bio,
      avatarUrl: req?.file?.path,
    });
    const result = await newArtist.save();
    if (result) {
      res
        .status(201)
        .json(new ApiSuccess(201, newArtist, "Artist added successfully."));
    } else {
      throw new ApiError(500, "Failed process request");
    }
  });
}
export const ArtistController = new ArtistHandler();
