type Footer_links_page_data_type = {
  id: number;
  url: string;
  name: string;
}[];

type Footer_links_page_type = {
  id: string;
  categories: string;
  data: Footer_links_page_data_type;
}[];

// -------------------------------------------------------------------------------

type Footer_net_links_type = {
  id: number;
  url: string;
  icon: string;
}[];

// -------------------------------------------------------------------------------

type Footer_documentation_link_type = {
  id: number;
  url: string;
  name: string;
}[];

// -------------------------------------------------------------------------------

type Footer_create_website_link = {
  id: number;
  name: string;
}[];

// -------------------------------------------------------------------------------

type Footer_route_data_type = {
  Footer_links_page: Footer_links_page_type;
  Footer_net_links: Footer_net_links_type;
  Footer_documentation_link: Footer_documentation_link_type;
  Footer_create_website_link: Footer_create_website_link;
};

const footerRouteData: Footer_route_data_type = {
  Footer_links_page: [
    {
      id: "li0",
      categories: "Company",
      data: [
        {
          id: 0,
          url: "/",
          name: "About",
        },
        {
          id: 1,
          url: "/",
          name: "Jobs",
        },
        {
          id: 2,
          url: "/",
          name: "For the Record",
        },
      ],
    },
    {
      id: "li1",
      categories: "Communities",
      data: [
        {
          id: 0,
          url: "/",
          name: "For Artists",
        },
        {
          id: 1,
          url: "/",
          name: "Developers",
        },
        {
          id: 2,
          url: "/",
          name: "Advertising",
        },
        {
          id: 3,
          url: "/",
          name: "Investors",
        },
        {
          id: 4,
          url: "/",
          name: "Vendors",
        },
      ],
    },
    {
      id: "li2",
      categories: "Useful links",
      data: [
        {
          id: 0,
          url: "/",
          name: "Support",
        },
        {
          id: 1,
          url: "/",
          name: "Free Mobile App",
        },
      ],
    },
  ],
  //   -------------------------------------------------------------------------------
  Footer_net_links: [
    {
      id: 0,
      url: "/",
      icon: "/img/Instagram_icon.png",
    },
    {
      id: 1,
      url: "/",
      icon: "/img/Twitch_icon.png",
    },
    {
      id: 2,
      url: "/",
      icon: "/img/Facebook_icon.png",
    },
  ],
  // -------------------------------------------------------------------------------
  Footer_documentation_link: [
    {
      id: 1,
      url: "/",
      name: "Legal",
    },
    {
      id: 1,
      url: "/",
      name: "Privacy Center",
    },
    {
      id: 1,
      url: "/",
      name: "Privacy Policy",
    },
    {
      id: 1,
      url: "/",
      name: "Cookies",
    },
    {
      id: 1,
      url: "/",
      name: "About Ads",
    },
    {
      id: 1,
      url: "/",
      name: "Accessibility",
    },
  ],
  Footer_create_website_link: [
    {
      id: 0,
      name: "© 2023 Spotify create by Albison students",
    },
  ],
};

export default footerRouteData;
