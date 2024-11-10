import Box from "@mui/material/Box";
import { LikeMusic } from "./LikeMusic";
import AddToPlaylist from "./AddToPlaylist";
import VolumeButton from "./VolumeButton";

type Props = {
  id: number;
};
const PlayerActions = (props: Props) => {
  const { id } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
      <LikeMusic id={id} />
      <AddToPlaylist />
      <VolumeButton />
    </Box>
  );
};

export default PlayerActions;
