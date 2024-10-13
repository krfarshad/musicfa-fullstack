import { Section, SongCard } from "@/components";
import { latestSong } from "../../utils/data";
import { Box, Stack } from "@mui/material";

export const NewSongs = () => {
  return (
    <Section title="Newest Song">
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
          <SongCard song={latestSong[0]} type="card" />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
          {latestSong.slice(1).map((song) => (
            <Stack direction="column" spacing={4}>
              <Box sx={{ width: "100%", marginBottom: "10px" }}>
                <SongCard song={song} type="wide" />
              </Box>
            </Stack>
          ))}
        </Box>
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
          {latestSong.slice(1).map((song) => (
            <Stack direction="column" spacing={4}>
              <Box sx={{ width: "100%", marginBottom: "10px" }}>
                <SongCard song={song} type="wide" />
              </Box>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Section>
  );
};
