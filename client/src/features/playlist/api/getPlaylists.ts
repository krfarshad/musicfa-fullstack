import { ApiResponse } from "@/types";
import { Playlist, PlaylistResponse } from "@/utils/models";

export const getPlaylists = async (): Promise<
  ApiResponse<PlaylistResponse[]>
> => {
  const model = new Playlist();
  const res = await model.playlists().get();
  return res.json();
};
