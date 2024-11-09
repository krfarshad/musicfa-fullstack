import { ApiResponse } from "@/types";
import { Music, MusicResponse } from "@/utils/models";

type Props = {
  id: string;
};
export const getMusic = async (
  props: Props,
): Promise<ApiResponse<MusicResponse>> => {
  const { id } = props;

  const model = new Music();
  const res = await model.music(id).get();
  return res.json();
};
