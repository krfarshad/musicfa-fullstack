import { ApiResponse } from "@/types";
import { Artist, ArtistResponse } from "@/utils/models";

type Props = {
  id: string;
};
export const getArtist = async (
  props: Props,
): Promise<ApiResponse<ArtistResponse>> => {
  const { id } = props;
  const model = new Artist();
  const res = await model.artist(id).get();
  return res.json();
};
