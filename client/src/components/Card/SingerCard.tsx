import { Box, Card, Link } from "@mui/material";
import Image from "next/image";
import { ArtistProp } from "@/features/artist";

interface Props {
  artist: ArtistProp;
}

export const SingerCard = (props: Props) => {
  const { artist } = props;
  return (
    <Card variant="elevation" sx={{ width: 120, background: "transparent" }}>
      <Box sx={{ borderRadius: "8px", width: "120px", height: "140px" }}>
        <Link href={`/singers/${artist.username}`}>
          <Image
            width={150}
            height={250}
            src={artist.avatar}
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
