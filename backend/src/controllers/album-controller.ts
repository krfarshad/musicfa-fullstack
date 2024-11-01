import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { Album } from "../database/models/album-model";
import { ApiSuccess } from "../utils/ApiSuccess";
import { ApiError } from "../utils/ApiError";
class AlbumHandler {
  public getAlbums = asyncHandler(async (req: Request, res: Response) => {
    const { page = 1, perPage = 12, search = "" } = req.query;

    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    const albums = await Album.find(query)
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage));

    const total = await Album.countDocuments(query);

    res.json(
      new ApiSuccess(200, albums, "Albums retrieved successfully.", {
        total,
        page: Number(page),
        totalPages: Math.ceil(total / Number(perPage)),
      })
    );
  });

  public getAlbum = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const album = await Album.findById(id);

    if (!album) {
      res.status(404).json(new ApiError(404, "Album not found."));
    }

    res.json(new ApiSuccess(200, album, "Album retrieved successfully."));
  });

  public removeAlbum = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const album = await Album.findByIdAndDelete(id);

    if (!album) {
      res.status(404).json(new ApiError(404, "Album not found."));
    }

    res.status(204).json({ message: "Album deleted successfully." });
  });

  public updateAlbum = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;

    const album = await Album.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!album) {
      res.status(404).json(new ApiError(404, "Album not found."));
    }
    res.json(new ApiSuccess(200, album, "Album updated successfully."));
  });

  public addAlbum = asyncHandler(async (req: Request, res: Response) => {
    const newAlbum = new Album(req.body);
    await newAlbum.save();
    res
      .status(201)
      .json(new ApiSuccess(201, newAlbum, "Album added successfully."));
  });
}

export const AlbumController = new AlbumHandler();
