import { albumList } from "@/features/album/utils/data";
import { MusicCard, Section } from "@/components";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

type Props = {
  id: string;
};

export const Album = (props: Props) => {
  const { id } = props;
  const album = albumList.find((album) => album.id == Number(id));

  return (
    <>
      {album && (
        <>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>
              <Image
                src={album.cover}
                alt={album.name}
                width={400}
                height={400}
                className="object-cover object-center"
              />
            </Box>
            <Box flex={1}>
              <Stack direction="column" spacing={2}>
                <Typography component="h1" variant="h2">
                  {album.name}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Image
                    src={album.singer.avatar}
                    alt={album.singer.username}
                    width={32}
                    height={32}
                    className="rounded-full object-cover object-center"
                  />
                  <Typography variant="body2">
                    {album.singer.username}
                  </Typography>
                </Stack>

                <Typography component="h6" variant="h6">
                  {album.songs.length} songs
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Box mt={4}>
            <Section title="Songs">
              {album.songs.length > 0 ? (
                <Stack direction="column" spacing={1}>
                  {album.songs.map((song, index) => (
                    <MusicCard
                      index={index}
                      key={`playlist_song_${album.name}_${song.id}`}
                      song={song}
                    />
                  ))}
                </Stack>
              ) : (
                <p className="text-light text-sm">
                  Currently this playlist has no music!
                </p>
              )}
            </Section>
          </Box>
        </>
      )}
    </>
  );
};
