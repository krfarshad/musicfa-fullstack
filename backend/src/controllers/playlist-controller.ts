import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

class PlaylistHandler {
  public getAlbums = asyncHandler(async (req: Request, res: Response) => {});
  public getPlaylist = asyncHandler(async (req: Request, res: Response) => {});
  public removePlaylist = asyncHandler(
    async (req: Request, res: Response) => {}
  );
  public updatePlaylist = asyncHandler(
    async (req: Request, res: Response) => {}
  );
  public addPlaylist = asyncHandler(async (req: Request, res: Response) => {});
  public addToPlaylist = asyncHandler(
    async (req: Request, res: Response) => {}
  );
}

export const PlaylistController = new PlaylistHandler();
