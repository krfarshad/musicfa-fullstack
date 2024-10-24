import { Box, Card, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { SongProp } from "@/features/music";
import LikeButton from "./LikeButton";
import dynamic from "next/dynamic";

const DynamicActions = dynamic(() => import("./SongActions"), { ssr: false });

type Props = {
  song: SongProp;
  index: number;
};
export const MusicCard = (props: Props) => {
  const { song, index } = props;

  return (
    <Card
      sx={{
        width: "100%",
        background: "background.dark",
        "&:hover": { background: "background.darkHot" },
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems={"center"}
        sx={{ width: "100%" }}
      >
        <Box pl={2}>
          <Typography
            variant="body1"
            component="h1"
            sx={{ fontWeight: "bold" }}
          >
            #{index}
          </Typography>
        </Box>

        <Box position="relative" sx={{ width: "60px", height: "60px" }}>
          <Link href={`/songs/${song.id}`}>
            <Image
              width={70}
              height={70}
              src={song.cover}
              alt={song.name}
              objectFit="cover"
              priority={false}
              objectPosition="center"
              className="h-full w-full object-cover object-center"
            />
          </Link>
          {/* <PlaySongButton status="play" /> */}
        </Box>
        <Stack
          direction="row"
          justifyContent="between"
          sx={{ width: "100%" }}
          flex={1}
        >
          <Box p={1} flex={1}>
            <Link
              href={`/songs/${song.id}`}
              variant="body1"
              sx={{ textAlign: "center", color: "text.light" }}
            >
              {song.name}
            </Link>
          </Box>

          <Stack direction="row" justifyContent="between">
            <Box sx={{ height: 1, display: "flex", alignItems: "center" }}>
              <LikeButton />
            </Box>
            <DynamicActions />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};
