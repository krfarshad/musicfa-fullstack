import { Album } from "@/features/album";

type Props = {
  params: { id: string };
};
const page = (props: Props) => {
  const { id } = props.params;
  return <Album id={id} />;
};

export default page;
