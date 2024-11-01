import { ApiResponse } from "@/types";
import { Album, AlbumResponse } from "@/utils/models";

export const albumList = async (): Promise<ApiResponse<AlbumResponse[]>> => {
  const model = new Album();
  const res = await model.albums().get();
  return res.json();
};
