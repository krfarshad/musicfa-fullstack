import { Section, SingerCard } from "@/components";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/Carousel/CarouselItem";

const TopArtists = () => {
  return (
    <Section title="Top artists">
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
    </Section>
  );
};

export default TopArtists;
