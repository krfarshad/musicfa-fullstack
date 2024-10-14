import { TopArtists } from "@/features/artist";
import HomeTopBanner from "./HomeTopBanner";
import { NewSongs } from "@/features/music";
import { LatestAlbums } from "@/features/album";
import { RecommendPlaylist } from "@/features/playlist";

export const Homepage = () => {
  return (
    <>
      <HomeTopBanner />
      <TopArtists />
      <NewSongs />
      <LatestAlbums />
      <RecommendPlaylist />
    </>
  );
};
