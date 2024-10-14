import { AlbumCard, Section } from "@/components";
import { albumList } from "@/features/album/utils/data";
import { Grid2, Box } from "@mui/material";

export const Albums = () => {
  return (
    <Section title="Albums" variant="h1">
      <Grid2 container spacing={2}>
        {albumList.map((album) => (
          <Box key={`album_${album.id}`}>
            <AlbumCard album={album} />
          </Box>
        ))}
      </Grid2>
    </Section>
  );
};
