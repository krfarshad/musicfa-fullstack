import { Avatar, Box, Card, Link, Stack } from "@mui/material";
import Image from "next/image";
import { AlbumResponse } from "@/utils/models";

interface Props {
  album: AlbumResponse;
}

export const AlbumCard = (props: Props) => {
  const { album } = props;
  return (
    <Card variant="elevation" sx={{ width: 180, background: "transparent" }}>
      <Box sx={{ borderRadius: "8px", width: 180, height: "140px" }}>
        <Link href={`/albums/${album.id}`}>
          <Image
            width={150}
            height={250}
            src={album.coverImageUrl}
            alt={album.title}
            objectFit="cover"
            priority={false}
            objectPosition="center"
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </Link>
      </Box>
      <Stack direction="row" width={1} alignItems="center" p={1}>
        <Link href={`/singers/${album.artist.username}`}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            alt={album.artist.username}
            src={album.artist.avatarUrl}
          />
        </Link>
        <Link
          href={`/albums/${album.id}`}
          variant="body2"
          sx={{ textAlign: "center", color: "text.light", pl: 1 }}
        >
          {album.title}
        </Link>
      </Stack>
    </Card>
  );
};
