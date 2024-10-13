import { TopArtists } from "@/features/artist";
import HomeTopBanner from "./HomeTopBanner";
import { NewSongs } from "@/features/music";

export const Homepage = () => {
  return (
    <>
      <HomeTopBanner />
      <TopArtists />
      <NewSongs />
    </>
  );
};
