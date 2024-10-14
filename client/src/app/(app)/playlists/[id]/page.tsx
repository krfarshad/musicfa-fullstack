import { Playlist } from "@/features/playlist";

type Props = {
  params : {id : string}
}
const page = (props : Props) => {
  const {id} = props.params
  return <Playlist  id={id}/>;
};

export default page;
