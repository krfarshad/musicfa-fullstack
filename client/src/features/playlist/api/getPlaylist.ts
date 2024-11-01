import { ApiResponse } from "@/types";
import { Playlist, PlaylistResponse } from "@/utils/models";

type Props = {
  id: string;
};
export const getPlaylist = async (
  props: Props,
): Promise<ApiResponse<PlaylistResponse[]>> => {
  const { id } = props;
  const model = new Playlist();
  const res = await model.playlist(id).get();
  return res.json();
};
