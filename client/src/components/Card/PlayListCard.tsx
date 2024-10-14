import { Box, Card, Link } from "@mui/material";
import Image from "next/image";
import { PlaylistProp } from "@/features/playlist";

interface Props {
  playlist: PlaylistProp;
}

export const PlayListCard = (props: Props) => {
  const { playlist } = props;
  return (
    <Card variant="elevation" sx={{ width: 160, background: "transparent" }}>
      <Box sx={{ borderRadius: "8px", width: "160px", height: "160px" }}>
        <Link href={`/playlists/${playlist.id}`}>
          <Image
            width={150}
            height={250}
            src={playlist.cover}
            alt={playlist.name}
            objectFit="cover"
            priority={false}
            objectPosition="center"
            className="h-full w-full rounded-lg object-cover object-center"
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
