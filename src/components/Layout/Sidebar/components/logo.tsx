import { Link } from "react-router-dom";
import clsx from "clsx";

// -------------------------------------------------------------------------------

import logo from "@/components/Layout/Sidebar/sass/logo.module.scss";

// -------------------------------------------------------------------------------

type LogoPropsType = {
  url: string;
  id: number;
  icon: string;
};

// -------------------------------------------------------------------------------

function Logo(props: LogoPropsType) {
  const { icon, id, url } = props;
  return (
    <Link to={url} key={id} className={clsx(logo.logo)}>
      <img src={icon} alt="logo" />
    </Link>
  );
}

export default Logo;
