import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import { MusicResponse } from "@/utils/models";
import { useAppDispatch } from "@/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { playMusicAsync, toggleIsPlaying } from "@/store/slices/musicSlice";

type Props = {
  music: MusicResponse;
};
export const PlaySongButton = (props: Props) => {
  const { music } = props;
  const dispatch = useAppDispatch();
  const { isPlaying, currentMusic } = useSelector(
    (state: RootState) => state.music,
  );

  const handlePlayMusic = () => {
    if (currentMusic && currentMusic.id === music.id) {
      dispatch(toggleIsPlaying(true));
    } else {
      dispatch(playMusicAsync(music));
    }
  };

  const handlePauseMusic = () => {
    dispatch(toggleIsPlaying(false));
  };

  return (
    <>
      <IconButton aria-label="play" color="inherit" size="large">
        {currentMusic?.id === music.id && isPlaying ? (
          <PauseIcon color="secondary" onClick={handlePauseMusic} />
        ) : (
          <PlayArrowIcon color="secondary" onClick={handlePlayMusic} />
        )}
      </IconButton>
    </>
  );
};
