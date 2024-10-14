import LikeButton from "@/components/Card/LikeButton";
import { playlists } from "@/features/playlist/utils/data";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import UnFollowPlaylist from "./UnFollowPlaylist";
import FollowPlaylist from "./FollowPlaylist";
import { MusicCard, Section } from "@/components";

type Props = {
  id: string;
};
export const Playlist = (props: Props) => {
  const { id } = props;
  const playlist = playlists.find((list) => list.id == Number(id));
  return (
    <>
      {playlist && (
        <>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>
              <Image
                src={playlist.cover}
                alt={playlist.name}
                width={400}
                height={400}
                className="object-cover object-center"
              />
            </Box>
            <Box flex={1}>
              <Stack direction="column" spacing={2}>
                <Typography component="h1" variant="h2">
                  {playlist.name}
                </Typography>
                <Typography component="h6" variant="h6">
                  {playlist.songs.length} songs
                </Typography>

                <Typography component="h6" variant="h6">
                  {playlist.followers_count} followers
                </Typography>
                <Stack>
                  <Stack direction="row" spacing={1}>
                    <LikeButton />
                    <Typography>{playlist.likes_count}</Typography>
                  </Stack>
                  {!playlist.is_owner && (
                    <Box mt={1}>
                      {playlist.is_user_followed ? (
                        <UnFollowPlaylist id={playlist.id} />
                      ) : (
                        <FollowPlaylist id={playlist.id} />
                      )}
                    </Box>
                  )}
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Box mt={4}>
            <Section title="Songs">
              {playlist.songs.length > 0 ? (
                <Stack direction="column" spacing={1}>
                  {playlist.songs.map((song, index) => (
                    <MusicCard
                      index={index}
                      key={`playlist_song_${playlist.name}_${song.id}`}
                      song={song}
                    />
                  ))}
                </Stack>
              ) : (
                <p className="text-light text-sm">
                  {" "}
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
