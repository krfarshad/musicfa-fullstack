import { Avatar, Box, Card, Link, Stack } from "@mui/material";
import Image from "next/image";
import { AlbumProp } from "@/features/album";

interface Props {
  album: AlbumProp;
}

export const AlbumCard = (props: Props) => {
  const { album } = props;
  return (
    <Card variant="elevation" sx={{ width: 120, background: "transparent" }}>
      <Box sx={{ borderRadius: "8px", width: "120px", height: "140px" }}>
        <Link href={`/albums/${album.id}`}>
          <Image
            width={150}
            height={250}
            src={album.cover}
            alt={album.name}
            objectFit="cover"
            priority={false}
            objectPosition="center"
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </Link>
      </Box>
      <Stack direction="row" width={1} alignItems="center" p={1}>
        <Link href={`/singers/${album.singer.username}`}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            alt={album.singer.username}
            src={album.singer.avatar}
          />
        </Link>
        <Link
          href={`/albums/${album.id}`}
          variant="body2"
          sx={{ textAlign: "center", color: "text.light", pl: 1 }}
        >
          {album.name}
        </Link>
      </Stack>
    </Card>
  );
};
