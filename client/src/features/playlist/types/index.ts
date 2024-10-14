import { SongProp } from "@/features/music";

export type PlaylistProp = {
  id: number;
  name: string;
  description: string;
  cover: string;
  songs: SongProp[];
  creator: {
    username: string;
  };
  is_public: boolean;
  likes_count: number;
  is_user_liked: boolean;
  followers_count: number;
  is_user_followed: boolean;
  is_owner: boolean;
};
