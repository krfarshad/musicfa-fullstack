import { SongProp } from "@/features/music";
import { Model } from "../Model";

export type MusicResponse = {
  id: number;
  title: string;
  musicUrl: string;
  playCount: number;
  coverImageUrl: string;
  description: string;
  likeCount: number;
  releaseDate: string;
  artist: {
    name: string;
    avatarUrl: string;
    username: string;
  };
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

  public like = (id: string) => {
    return this.customUrl(`/musics/${id}/like`);
  };

  public play = (id: string) => {
    return this.customUrl(`/musics/${id}/play`);
  };
}
