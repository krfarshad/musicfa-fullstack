import { SongProp } from "@/features/music";
import { Model } from "../Model";

export type MusicResponse = {
  id: number;
  title: string;
  coverImageUrl: string;
  description: string;
  likeCount: number;
  releaseDate: string;
  name: string;
  artist: {
    name: string;
    avatarUrl: string;
    username: string;
  };
  tracks?: SongProp[];
};

export class Music extends Model {
  public resource(): string {
    return "musics";
  }

  public musics = () => {
    return this.customUrl("musics");
  };

  public music = (id: string) => {
    return this.customUrl(`/musics/${id}`);
  };
}
