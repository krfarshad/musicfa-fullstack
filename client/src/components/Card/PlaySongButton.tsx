import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";

type Props = {
  status: "play" | "pause";
};
export const PlaySongButton = (props: Props) => {
  const { status } = props;
  return (
    <>
      <IconButton aria-label="play" color="inherit" size="small">
        {status == "play" ? <PlayArrowIcon /> : <PauseIcon />}
      </IconButton>
    </>
  );
};
