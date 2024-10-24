import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

class MusicHandler {
  public getAlbums = asyncHandler(async (req: Request, res: Response) => {});
  public getMusic = asyncHandler(async (req: Request, res: Response) => {});
  public removeMusic = asyncHandler(async (req: Request, res: Response) => {});
  public updateMusic = asyncHandler(async (req: Request, res: Response) => {});
  public addMusic = asyncHandler(async (req: Request, res: Response) => {});
  public addToMusic = asyncHandler(async (req: Request, res: Response) => {});
}

export const MusicController = new MusicHandler();
