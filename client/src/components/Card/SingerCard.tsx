import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import Image from "next/image";
import { ArtistResponse } from "@/utils/models";

interface Props {
  artist: ArtistResponse;
}

export const SingerCard = (props: Props) => {
  const { artist } = props;
  return (
    <Box
      display="flex"
      justifyContent="center"
      minWidth={250}
      alignItems="center"
    >
      <Card
        variant="elevation"
        sx={{
          maxWidth: 400,
          width: "100%",
          boxShadow: 3,
          background: "transparent",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            overflow: "hidden",
            width: 140,
            height: 140,
            margin: "0 auto",
            mt: 2,
          }}
        >
          <Link href={`/artists/${artist.username}`}>
            <Image
              src={artist.avatarUrl}
              alt={artist.name}
              width={140}
              height={140}
              objectFit="cover"
              priority={false}
              className="rounded-full object-cover object-center"
            />
          </Link>
        </Box>

        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="div">
            {artist.name}
          </Typography>
          <Link
            href={`/singers/${artist.username}`}
            sx={{ color: "text.secondary" }}
          >
            @{artist.username}
          </Link>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {artist.bio}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
