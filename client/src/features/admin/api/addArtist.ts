import { ApiResponse } from "@/types";
import { PostArtistProp } from "../components/AddArtist";
import { convertToFormData } from "@/utils/convertToFormData";
import { Artist } from "@/utils/models";

type Props = {
  values: PostArtistProp;
};

export const addArtist = async (props: Props): Promise<ApiResponse<any>> => {
  const { values } = props;
  const editValues = {
    ...values,
    avatarUrl: values?.avatarUrl && (values?.avatarUrl[0] as File),
  };
  const parseValues: FormData = convertToFormData<PostArtistProp>(editValues);
  const model = new Artist();

  const req = await model.artists().multipleForm(parseValues);
  return await req.json();
};
