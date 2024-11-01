import { ApiResponse } from "@/types";
import { Music, MusicResponse } from "@/utils/models";

export const getMusics = async (): Promise<ApiResponse<MusicResponse[]>> => {
  const model = new Music();
  const res = await model.musics().get();
  return res.json();
};
