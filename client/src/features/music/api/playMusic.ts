import { ApiResponse } from "@/types";
import { Music } from "@/utils/models";

type PlayResponse = {
  playCount: number;
};
type Props = {
  id: string;
};
export const playMusic = async (
  props: Props,
): Promise<ApiResponse<PlayResponse>> => {
  const { id } = props;

  const model = new Music();
  const res = await model.play(id).patch({});
  return res.json();
};
