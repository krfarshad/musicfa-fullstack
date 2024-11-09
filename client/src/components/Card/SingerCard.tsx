import { Box, Card, Link } from "@mui/material";
import Image from "next/image";
import { ArtistResponse } from "@/utils/models";

interface Props {
  artist: ArtistResponse;
}

export const SingerCard = (props: Props) => {
  const { artist } = props;
  return (
    <Card variant="elevation" sx={{ width: 140, background: "transparent" }}>
      <Box sx={{ borderRadius: "8px", width: 140, height: "140px" }}>
        <Link href={`/artists/${artist.username}`}>
          <Image
            width={150}
            height={250}
            src={artist.avatarUrl}
            alt={artist.username}
            objectFit="cover"
            priority={false}
            objectPosition="center"
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </Link>
      </Box>
      <Box p={1}>
        <Link
          href={`/singers/${artist.username}`}
          variant="body2"
          sx={{ textAlign: "center", color: "text.light" }}
        >
          {artist.name}
        </Link>
      </Box>
    </Card>
  );
};
