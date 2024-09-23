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
      <IconButton
        aria-label="play"
        color="inherit"
        size="small"
        sx={{
          position: "absolute",
          bottom: 5,
          left: 2,
          zIndex: 10,
          backgroundColor: "#999",
        }}
      >
        {status == "play" ? <PlayArrowIcon /> : <PauseIcon />}
      </IconButton>
    </>
  );
};
