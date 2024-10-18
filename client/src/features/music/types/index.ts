export type SongProp = {
  id: number;
  name: string;
  slug: string;
  singer: {
    username: string;
    name: string;
    avatar: string;
  };
  likes_count: number;
  plays_count: number;
  is_user_liked: boolean;
  cover: string;
};
