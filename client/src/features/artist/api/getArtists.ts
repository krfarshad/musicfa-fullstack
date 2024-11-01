import { ApiResponse } from "@/types";
import { Artist, ArtistResponse } from "@/utils/models";

export const getArtists = async (): Promise<ApiResponse<ArtistResponse[]>> => {
  const model = new Artist();
  const res = await model.artists().get();
  return res.json();
};
