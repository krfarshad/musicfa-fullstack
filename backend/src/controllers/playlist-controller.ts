import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

class PlaylistHandler {
  public getPlaylist = asyncHandler(async (req: Request, res: Response) => {});
  public getPlaylists = asyncHandler(async (req: Request, res: Response) => {});
  public getUserPlaylists = asyncHandler(async (req: Request, res: Response) => {});
  public getUserPlaylist = asyncHandler(async (req: Request, res: Response) => {});
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
