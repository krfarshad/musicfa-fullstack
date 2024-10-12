import { Section, SingerCard } from "@/components";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/Carousel/CarouselItem";
import { topArtistList } from "../../utils/data";

const TopArtists = () => {
  return (
    <Section title="Top Artists">
      <Carousel gap="gap-6">
        {topArtistList.map((artist) => (
          <CarouselItem>
            <SingerCard artist={artist} />
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
};

export default TopArtists;
