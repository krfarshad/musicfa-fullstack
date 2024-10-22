import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

class AlbumHandler {
  public getAlbums = asyncHandler(async (req: Request, res: Response) => {});
  public getAlbum = asyncHandler(async (req: Request, res: Response) => {});
  public removeAlbum = asyncHandler(async (req: Request, res: Response) => {});
  public updateAlbum = asyncHandler(async (req: Request, res: Response) => {});
  public addAlbum = asyncHandler(async (req: Request, res: Response) => {});
}

export const AlbumController = new AlbumHandler();
