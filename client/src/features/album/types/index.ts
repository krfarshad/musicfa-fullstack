import { SongProp } from "@/features/music";

export type AlbumProp = {
  id: number;
  name: string;
  cover: string;
  singer: {
    username: string;
    avatar: string;
  };
  songs: SongProp[];
};
