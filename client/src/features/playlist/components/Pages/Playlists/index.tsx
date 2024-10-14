import { PlayListCard, Section } from "@/components";
import { playlists } from "@/features/playlist/utils/data";
import { Grid2 } from "@mui/material";

export const Playlists = () => {
  return (
    <Section title="Playlists" variant="h1">
      <Grid2 container spacing={1}>
        {playlists.map((playlist) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={`playlist_${playlist.id}`}
          >
            <PlayListCard playlist={playlist} />
          </Grid2>
        ))}
      </Grid2>
    </Section>
  );
};
