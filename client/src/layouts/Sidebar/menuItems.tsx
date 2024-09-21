import {
  AudioSquare,
  Category,
  GlobalSearch,
  Home,
  IconProps,
  MusicPlaylist,
  TagUser,
} from "iconsax-react";

export type MenuProp = {
  title: string;
  items: {
    title: string;
    icon: any;
    link: string;
  }[];
};

const iconProps: IconProps = { size: 18, color: "#fff", variant: "Broken" };

export const menuItems: MenuProp[] = [
  {
    title: "Menu",
    items: [
      {
        title: "Home",
        icon: <Home {...iconProps} />,
        link: "/",
      },
      {
        title: "Browse",
        icon: <GlobalSearch {...iconProps} />,
        link: "/browse",
      },
      {
        title: "Albums",
        icon: <Category {...iconProps} />,
        link: "/albums",
      },
      {
        title: "Artists",
        icon: <TagUser {...iconProps} />,
        link: "/artists",
      },
    ],
  },
  {
    title: "Library",
    items: [
      {
        title: "Recent",
        icon: <AudioSquare {...iconProps} />,
        link: "/recent",
      },
      {
        title: "Playlists",
        icon: <MusicPlaylist {...iconProps} />,
        link: "/playlists",
      },
    ],
  },
];
