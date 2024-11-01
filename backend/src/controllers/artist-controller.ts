import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { Artist } from "../database/models/artist-model";
import { ApiSuccess } from "../utils/ApiSuccess";
import { ApiError } from "../utils/ApiError";
class ArtistHandler {
  public getArtists = asyncHandler(async (req: Request, res: Response) => {
    const { page = 1, perPage = 12, search = "" } = req.query;

    const query = search ? { name: { $regex: search, $options: "i" } } : {};

    const artists = await Artist.find(query)
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage));

    const total = await Artist.countDocuments(query);

    res.json(
      new ApiSuccess(200, artists, "success", {
        total,
        page: Number(page),
        totalPages: Math.ceil(total / Number(perPage)),
      })
    );
  });

  public getArtist = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const artist = await Artist.findById(id);

    if (!artist) {
      res.status(404).json(new ApiError(404, "Artist not found."));
    }

    res.json(new ApiSuccess(200, artist, "Artist retrieved successfully."));
  });

  public updateArtist = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;

    const artist = await Artist.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!artist) {
      res.status(404).json(new ApiError(404, "Artist not found."));
    }

    res.json(new ApiSuccess(200, artist, "Artist updated successfully."));
  });

  public addArtist = asyncHandler(async (req: Request, res: Response) => {
    const newArtist = new Artist(req.body);

    await newArtist.save();

    res
      .status(201)
      .json(new ApiSuccess(201, newArtist, "Artist added successfully."));
  });
}

export const ArtistController = new ArtistHandler();
