import { Section, MusicCard } from "@/components";
import { latestSong } from "../../utils/data";
import { Grid2 } from "@mui/material";

export const NewSongs = () => {
  return (
    <Section title="Newest Song">
      <Grid2 container spacing={1}>
        {latestSong.slice(1).map((song, index) => (
          <Grid2 size={{ xs: 12, md: 6 }}>
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
