import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

class ArtistHandler {
  public getAlbums = asyncHandler(async (req: Request, res: Response) => {});
  public getArtist = asyncHandler(async (req: Request, res: Response) => {});
  public removeArtist = asyncHandler(async (req: Request, res: Response) => {});
  public updateArtist = asyncHandler(async (req: Request, res: Response) => {});
  public addArtist = asyncHandler(async (req: Request, res: Response) => {});
}

export const ArtistController = new ArtistHandler();
