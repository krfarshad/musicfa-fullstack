import { Section, PlayListCard } from "@/components";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/Carousel/CarouselItem";
import { playlists } from "../../utils/data";

const RecommendPlaylist = () => {
  return (
    <Section title="Top Playlists">
      <Carousel gap="gap-6">
        {playlists.map((playlist) => (
          <CarouselItem>
            <PlayListCard playlist={playlist} />
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
};
export default RecommendPlaylist;
