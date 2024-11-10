import { formatTime } from "@/utils/formatTime";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const ProgressBar = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { currentMusic } = useSelector((state: RootState) => state.music);

  useEffect(() => {
    audioRef.current = new Audio(currentMusic?.musicUrl);

    audioRef.current.addEventListener("loadedmetadata", () => {
      if (audioRef.current && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
        audioRef.current.play();
      }
    });

    audioRef.current.addEventListener("timeupdate", () => {
      setCurrentTime(audioRef.current!.currentTime);
    });

    audioRef.current.addEventListener("timeupdate", () => {
      audioRef.current && setCurrentTime(audioRef.current.currentTime);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("loadedmetadata", () => {});
        audioRef.current.removeEventListener("timeupdate", () => {});
      }
    };
  }, []);

  const managePath = (value: number | number[]) => {
    setCurrentTime(value as number);
    if (audioRef.current) audioRef.current.currentTime = value as number;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        mx: 3,
        textAlign: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Typography variant="caption">{formatTime(currentTime)}</Typography>
      <Slider
        value={currentTime}
        max={duration}
        onChange={(e, value) => managePath(value)}
        color="secondary"
        sx={{
          mx: 2,
          width: 1,
          color: "secondary.main",
          "& .MuiSlider-track": {
            backgroundColor: "secondary.main",
            transformOrigin: "left center",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "grey.800",
          },
        }}
      />
      <Typography variant="caption">{formatTime(duration)}</Typography>
    </Box>
  );
};
