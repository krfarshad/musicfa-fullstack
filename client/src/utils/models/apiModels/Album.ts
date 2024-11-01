import { SongProp } from "@/features/music";
import { Model } from "../Model";

export type AlbumResponse = {
  id: number;
  title: string;
  coverImageUrl: string;
  description: string;
  likeCount: number;
  releaseDate: string;
  artist: {
    name: string;
    avatarUrl: string;
    username: string;
  };
  tracks?: SongProp[];
};

export class Album extends Model {
  public resource(): string {
    return "albums";
  }

  public albums = () => {
    return this.customUrl("albums");
  };
}
