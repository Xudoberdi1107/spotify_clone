export type Footer_links_page_data_type = {
  id: number;
  url: string;
  name: string;
}[];

export type Footer_links_page_type = {
  id: string;
  categories: string;
  data: Footer_links_page_data_type;
}[];

// -------------------------------------------------------------------------------

export type Footer_net_links_type = {
  id: number;
  url: string;
  icon: string;
}[];

// -------------------------------------------------------------------------------

export type Footer_documentation_link_type = {
  id: number;
  url: string;
  name: string;
}[];

// -------------------------------------------------------------------------------

export type Footer_create_website_link = {
  id: number;
  name: string;
}[];

// -------------------------------------------------------------------------------

export type Footer_route_data_type = {
  Footer_links_page: Footer_links_page_type;
  Footer_net_links: Footer_net_links_type;
  Footer_documentation_link: Footer_documentation_link_type;
  Footer_create_website_link: Footer_create_website_link;
};
