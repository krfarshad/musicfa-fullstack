import { ApiResponse } from "@/types";
import { Music, MusicResponse } from "@/utils/models";

type Props = {
  id: string;
};
export const likeMusic = async (
  props: Props,
): Promise<ApiResponse<MusicResponse>> => {
  const { id } = props;

  const model = new Music();
  const res = await model.like(id).patch({});
  return res.json();
};
