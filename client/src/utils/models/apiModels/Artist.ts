import { Model } from "../Model";

export type ArtistResponse = {
  id: number;
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
};

export class Artist extends Model {
  public resource(): string {
    return "artists";
  }

  public artists = () => {
    return this.customUrl("artists");
  };

  public artist = (id: string) => {
    return this.customUrl(`artists/${id}`);
  };
}
