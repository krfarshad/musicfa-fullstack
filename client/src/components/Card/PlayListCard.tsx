import { Box, Card, Link } from "@mui/material";
import Image from "next/image";
import { PlaylistResponse } from "@/utils/models";

interface Props {
  playlist: PlaylistResponse;
}

export const PlayListCard = (props: Props) => {
  const { playlist } = props;
  return (
    <Card variant="elevation" sx={{ width: 1, background: "transparent" }}>
      <Box
        sx={{
          borderRadius: "8px",

          maxWidth: 1,
          height: "160px",
        }}
      >
        <Link href={`/playlists/${playlist.id}`}>
          <Image
            width={300}
            height={300}
            src={playlist.coverImageUrl}
            alt={playlist.name}
            objectFit="cover"
            priority={false}
            objectPosition="center"
            className="h-full w-full max-w-full rounded-lg object-cover object-center"
          />
        </Link>
      </Box>
      <Box p={1}>
        <Link
          href={`/playlists/${playlist.id}`}
          variant="body2"
          sx={{ textAlign: "center", color: "text.light" }}
        >
          {playlist.name}
        </Link>
      </Box>
    </Card>
  );
};
