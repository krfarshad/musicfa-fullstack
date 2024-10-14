import { Section, SingerCard } from "@/components";
import { topArtistList } from "@/features/artist/utils/data";
import { Grid2, Box } from "@mui/material";

export const Artists = () => {
  return (
    <Section title="Artists" variant="h1">
      <Grid2 container spacing={2}>
        {topArtistList.map((artist) => (
          <Box key={`singer_${artist.id}`}>
            <SingerCard artist={artist} />
          </Box>
        ))}
      </Grid2>
    </Section>
  );
};
