import { NavLink } from "react-router-dom";
import clsx from "clsx";

// -------------------------------------------------------------------------------

import linkstyle from "@/components/Layout/Sidebar/sass/link.module.scss";

// -------------------------------------------------------------------------------

type LinkPropsType = {
  id: number;
  url: string;
  urlText: any;
  img: any;
};

function Links(props: LinkPropsType) {
  const { img, id, url, urlText } = props;
  return (
    <NavLink to={url} className={clsx(linkstyle.sidebar_section_link)} key={id}>
      {img}
      {urlText}
    </NavLink>
  );
}

export default Links;
