import { Model } from "../Model";

export type PlaylistResponse = {
  id: number;
  name: string;
  creator: {
    username: string;
    displayName: string;
    avatarUrl: string;
  };
  description: string;
  tracks?: string[];
  coverImageUrl: string;
  isPublic: boolean;
  createdAt: string;
};

export class Playlist extends Model {
  public resource(): string {
    return "playlists";
  }

  public playlists = () => {
    return this.customUrl("playlists");
  };

  public playlist = (id: string) => {
    return this.customUrl(`playlists/${id}`);
  };
}
