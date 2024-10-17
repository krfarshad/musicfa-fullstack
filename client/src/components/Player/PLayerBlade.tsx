import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import songImage from "@/assets/images/song.jpeg";
import Image from "next/image";
const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "#000",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&::before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249 , 0.2) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&::after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225 ,0.2) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(0,0,0,0.6)",
  }),
}));

const CoverImage = styled("div")({
  width: 70,
  height: 70,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function PLayerBlade() {
  const duration = 200;
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  return (
    <>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "fixed",
          px: 3,
          py: 1,
          height: "100px",
          bottom: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        <Stack
          position="relative"
          direction="row"
          sx={{
            width: "100%",
            alignItems: "center",
            zIndex: 200,
            margin: "auto",
          }}
        >
          <Stack direction="row" sx={{ width: "220px", alignItems: "center" }}>
            <CoverImage>
              <Image
                alt="can't win - Chilling Sunday"
                src={songImage.src}
                width={70}
                height={70}
                priority={false}
                objectPosition="center"
              />
            </CoverImage>
            <Box sx={{ ml: 1 }}>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 500 }}
              >
                Taylor swift
              </Typography>
              <Typography>Love story</Typography>
            </Box>
          </Stack>

          <Box mx={{ flex: "1 1 0%" }}>
            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: -1,
                "& svg": {
                  color: "#000",
                  ...theme.applyStyles("dark", {
                    color: "#fff",
                  }),
                },
              })}
            >
              <IconButton aria-label="previous song">
                <FastRewindRounded fontSize="medium" />
              </IconButton>
              <IconButton
                aria-label={paused ? "play" : "pause"}
                onClick={() => setPaused(!paused)}
              >
                {paused ? (
                  <PlayArrowRounded sx={{ fontSize: "2rem" }} />
                ) : (
                  <PauseRounded sx={{ fontSize: "2rem" }} />
                )}
              </IconButton>
              <IconButton aria-label="next song">
                <FastForwardRounded fontSize="medium" />
              </IconButton>
            </Box>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value as number)}
              sx={(t) => ({
                color: "rgba(0,0,0,0.87)",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&::before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
                    ...t.applyStyles("dark", {
                      boxShadow: `0px 0px 0px 8px ${"rgb(255 255 255 / 16%)"}`,
                    }),
                  },
                  "&.Mui-active": {
                    width: 20,
                    height: 20,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
                ...t.applyStyles("dark", {
                  color: "#fff",
                }),
              })}
            />
          </Box>
          <Box sx={{ width: "200px" }}>
            <Stack
              spacing={1}
              direction="row"
              mx={{ justifyContent: "flex-end", width: "100%" }}
            >
              <IconButton>
                {/* <FavoriteBorderIcon size="small" /> */}
              </IconButton>
              <IconButton>{/* <QueueMusicIcon size="small" /> */}</IconButton>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={(theme) => ({
                mb: 1,
                px: 1,
                "& > svg": {
                  color: "rgba(0,0,0,0.4)",
                  ...theme.applyStyles("dark", {
                    color: "rgba(255,255,255,0.4)",
                  }),
                },
              })}
              alignItems="center"
            >
              <VolumeDownRounded />
              <Slider
                aria-label="Volume"
                defaultValue={30}
                sx={(t) => ({
                  color: "rgba(0,0,0,0.87)",
                  "& .MuiSlider-track": {
                    border: "none",
                  },
                  "& .MuiSlider-thumb": {
                    width: 20,
                    height: 20,
                    backgroundColor: "#fff",
                    "&::before": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                      boxShadow: "none",
                    },
                  },
                  ...t.applyStyles("dark", {
                    color: "#fff",
                  }),
                })}
              />
              <VolumeUpRounded />
            </Stack>
          </Box>
        </Stack>
        <WallPaper />
      </Box>
    </>
  );
}
