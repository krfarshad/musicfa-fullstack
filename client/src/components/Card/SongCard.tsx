import { Box, Card, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { PlaySongButton } from "./PlaySongButton";
import { SongProp } from "@/features/music";
import LikeButton from "./LikeButton";
import SongActions from "./SongActions";

type Props = {
  song: SongProp;
  type?: "card" | "wide";
};
export const SongCard = (props: Props) => {
  const { song, type = "card" } = props;

  return (
    <Card
      sx={{
        width: "100%",
        background: "background.dark",
        marginBottom: "12px",
      }}
    >
      {type === "card" ? (
        <>
          <Box position="relative" sx={{ height: "90%" }}>
            <Link href={`/songs/${song.id}`}>
              <Image
                width={700}
                height={700}
                src={song.cover}
                alt={song.name}
                objectFit="cover"
                priority={false}
                objectPosition="center"
                className="h-full w-full object-cover object-center"
              />
            </Link>
            <Box position="absolute" sx={{ bottom: "16px", left: "16px" }}>
              <PlaySongButton status="play" />
            </Box>
          </Box>
          <Stack
            p={1}
            direction="row"
            justifyContent="between"
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Box flex={1}>
              <Link
                href={`/songs/${song.id}`}
                variant="body1"
                sx={{ textAlign: "left", color: "text.light" }}
              >
                {song.name}
              </Link>
            </Box>
            <SongActions />
          </Stack>
        </>
      ) : (
        <Stack
          direction="row"
          spacing={2}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Box position="relative" sx={{ width: "70px", height: "70px" }}>
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
            <Box>
              <SongActions />
            </Box>
          </Stack>
        </Stack>
      )}
    </Card>
  );
};
