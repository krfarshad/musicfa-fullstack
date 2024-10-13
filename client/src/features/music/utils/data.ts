import { SongProp } from "../types";

export const latestSong: SongProp[] = [
  {
    id: 1,
    name: "Love Story",
    slug: "love-story",
    singer: {
      username: "taylor",
      name: "Taylor Swift",
      avatar: "/images/taylor.png",
    },
    likes_count: 15000,
    plays_count: 500000,
    is_user_liked: true,
    cover: "/images/tailor.jpg",
  },
  {
    id: 2,
    name: "Hello",
    slug: "hello",
    singer: {
      username: "adele",
      name: "Adele",
      avatar: "/images/adele.jpg",
    },
    likes_count: 22000,
    plays_count: 750000,
    is_user_liked: false,
    cover: "/images/cover.jpg",
  },
  {
    id: 3,
    name: "Lose Yourself",
    slug: "lose-yourself",
    singer: {
      username: "eminem",
      name: "Eminem",
      avatar: "/images/eminem.jpeg",
    },
    likes_count: 18000,
    plays_count: 980000,
    is_user_liked: true,
    cover: "/images/cover.jpg",
  },
  {
    id: 4,
    name: "Halo",
    slug: "halo",
    singer: {
      username: "beyonce",
      name: "Beyoncé",
      avatar: "/images/Beyoncé.webp",
    },
    likes_count: 20000,
    plays_count: 860000,
    is_user_liked: false,
    cover: "/images/cover.jpg",
  },
  {
    id: 5,
    name: "Rain on Me",
    slug: "rain-on-me",
    singer: {
      username: "gaga",
      name: "Lady Gaga",
      avatar: "/images/GaGa.jpg",
    },
    likes_count: 14000,
    plays_count: 630000,
    is_user_liked: true,
    cover: "/images/cover.jpg",
  },
];
