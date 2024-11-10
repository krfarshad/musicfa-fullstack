import { useAppDispatch } from "@/hooks";
import { RootState } from "@/store";
import { toggleIsPlaying } from "@/store/slices/musicSlice";
import PlayArrow from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { Pause } from "iconsax-react";
import { useSelector } from "react-redux";

export const PlayerButtons = () => {
  const dispatch = useAppDispatch();

  const { isPlaying, loading } = useSelector((state: RootState) => state.music);

  const handleTogglePlay = () => {
    dispatch(toggleIsPlaying(!isPlaying));
  };

  return (
    <div>
      {loading ? (
        <CircularProgress size="30px" />
      ) : (
        <IconButton color="inherit" onClick={handleTogglePlay}>
          {isPlaying ? (
            <Pause fontSize="large" />
          ) : (
            <PlayArrow fontSize="large" />
          )}
        </IconButton>
      )}
    </div>
  );
};
