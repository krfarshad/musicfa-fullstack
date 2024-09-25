import { SingerCard } from "@/components";
import { Carousel } from "@/components/Carousel";

import { CarouselItem } from "@/components/Carousel/CarouselItem";
import { Typography, Box } from "@mui/material";

const TopArtists = () => {
  return (
    <Box
      sx={{
        mt: 8,
        p: 4,
        backgroundColor: "background.light",
      }}
    >
      <Typography variant="h5" gutterBottom mb="1">
        TopArtists
      </Typography>
      <Carousel gap="gap-6">
        <CarouselItem>
          <SingerCard />
        </CarouselItem>
        <CarouselItem>
          <SingerCard />
        </CarouselItem>
        <CarouselItem>
          <SingerCard />
        </CarouselItem>
        <CarouselItem>
          <SingerCard />
        </CarouselItem>
      </Carousel>
    </Box>
  );
};

export default TopArtists;
