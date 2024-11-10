import { ApiResponse } from "@/types";
import { Artist, ArtistResponse } from "@/utils/models";

type Props = {
  username: string;
};
export const getArtist = async (
  props: Props,
): Promise<ApiResponse<ArtistResponse>> => {
  const { username } = props;
  const model = new Artist();
  const res = await model.artist(username).get();
  return res.json();
};
