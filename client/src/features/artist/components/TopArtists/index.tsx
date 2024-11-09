"use client";

import { Section, SingerCard } from "@/components";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/Carousel/CarouselItem";
import { topArtistList } from "../../utils/data";
import { useQuery } from "@tanstack/react-query";
import { getArtists } from "../../api/getArtists";

const TopArtists = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtists,
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    throw new Error(error ? error.message : "Fetch error!");
  }

  return (
    <>
      {isSuccess && data.data && (
        <Section title="Top Artists">
          <Carousel gap="gap-6">
            {data.data.map((artist) => (
              <CarouselItem key={`artist_${artist.id}`}>
                <SingerCard artist={artist} />
              </CarouselItem>
            ))}
          </Carousel>
        </Section>
      )}
    </>
  );
};

export default TopArtists;
