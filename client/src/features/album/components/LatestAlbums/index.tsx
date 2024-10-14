import { Section, AlbumCard } from "@/components";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/Carousel/CarouselItem";
import { albumList } from "../../utils/data";

export const LatestAlbums = () => {
  return (
    <Section title="Latest Albums">
      <Carousel gap="gap-6">
        {albumList.map((album) => (
          <CarouselItem>
            <AlbumCard album={album} />
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
};
