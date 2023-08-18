export type LinkProps = {
  id: number;
  icon: string;
  icon2?: string;
  name?: string;
  url: string;
}[];

export type LogoProps = {
  id: number;
  icon: string;
  url: string;
};

export type data_link_type = {
  logo_data: LogoProps[];
  link_data: LinkProps[];
};

// -------------------------------------------------------------------------------

const routesData: data_link_type = {
  logo_data: [
    {
      id: 0,
      icon: "/img/Spotify_logo.svg",
      url: "/home",
    },
  ],
  link_data: [
    [
      {
        id: 1,
        name: "Home",
        icon: "/img/Home_icon.svg",
        icon2: "/img/Home_icon2.svg",
        url: "/home",
      },
      {
        id: 2,
        name: "Search",
        icon: "/img/Search_icon.svg",
        icon2: "/img/Search_icon2.svg",
        url: "/search",
      },
      {
        id: 3,
        name: "Your Library",
        icon: "/img/Group_icon.svg",
        icon2: "/img/Group_icon2.svg",
        url: "/group",
      },
    ],
    [
      {
        id: 4,
        name: "Create Playlist",
        icon: "/img/Plus_icons.svg",
        icon2: "/img/Plus_icons.svg",
        url: "/plus",
      },
      {
        id: 5,
        name: "Liked Songs",
        icon: "/img/Liked_icon.svg",
        icon2: "/img/Liked_icon.svg",
        url: "/liked",
      },
    ],
  ],
};

export default routesData;
