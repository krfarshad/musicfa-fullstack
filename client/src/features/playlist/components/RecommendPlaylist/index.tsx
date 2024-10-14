import { Section, PlayListCard } from "@/components";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/Carousel/CarouselItem";
import { playlists } from "../../utils/data";
import { Box } from "@mui/material";

const RecommendPlaylist = () => {
  return (
    <Section title="Top Playlists">
      <Carousel gap="gap-6">
        {playlists.map((playlist) => (
          <CarouselItem>
            <Box sx={{ width: { xs: 180, md: 280 } }}>
              <PlayListCard playlist={playlist} />
            </Box>
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
};
export default RecommendPlaylist;
