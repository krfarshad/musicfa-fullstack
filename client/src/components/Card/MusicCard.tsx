import { Box, Card, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import LikeButton from "./LikeButton";
import dynamic from "next/dynamic";
import { MusicResponse } from "@/utils/models";
import { PlaySongButton } from "./PlaySongButton";

const DynamicActions = dynamic(() => import("./SongActions"), { ssr: false });

type Props = {
  music: MusicResponse;
  index?: number;
};
export const MusicCard = (props: Props) => {
  const { music, index } = props;
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
        {index && (
          <Box pl={2}>
            <Typography
              variant="body1"
              component="h1"
              sx={{ fontWeight: "bold" }}
            >
              #{index}
            </Typography>
          </Box>
        )}
        <Box position="relative" sx={{ width: "60px", height: "60px" }}>
          <Image
            width={70}
            height={70}
            src={music.coverImageUrl}
            alt={music.title}
            objectFit="cover"
            priority={false}
            objectPosition="center"
            className="h-full w-full object-cover object-center"
          />
          <Box
            position="absolute"
            sx={{ background: "#0005" }}
            width={1}
            height={1}
            left={0}
            top={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <PlaySongButton music={music} />
          </Box>
        </Box>
        <Stack
          direction="row"
          justifyContent="between"
          sx={{ width: "100%" }}
          flex={1}
        >
          <Box p={1} flex={1}>
            <Link
              href={`/musics/${music.id}`}
              variant="body1"
              sx={{ textAlign: "center", color: "text.light" }}
            >
              {music.title}
            </Link>
            <Box>
              <Link href={`/artists/${music.artist.username}`}>
                <Typography sx={{ color: "text.light" }} variant="body1">
                  {music.artist.name}
                </Typography>
              </Link>
            </Box>
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
