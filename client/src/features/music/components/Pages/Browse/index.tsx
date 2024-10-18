import { Section, MusicCard } from "@/components";
import { latestSong } from "@/features/music/utils/data";
import { Grid2 } from "@mui/material";

export const Browse = () => {
  return (
    <Section title="Browse Musics" variant="h1">
      <Grid2 container spacing={1}>
        {latestSong.slice(1).map((song, index) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={`music_${song.id}`}>
            <MusicCard
              key={`music_${song.name}`}
              song={song}
              index={index + 1}
            />
          </Grid2>
        ))}
      </Grid2>
    </Section>
  );
};
