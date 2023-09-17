import style from "@/components/Layout/Sidebar/sass/link.module.scss";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
// import { useEffect, useState } from "react";
// -------------------------------------------------------------------------------

import linkstyle from "@/components/Layout/Sidebar/sass/link.module.scss";

// -------------------------------------------------------------------------------

type LinkPropsType = {
  url: string;
  styles: string;
  name: string | undefined;
  img: string | undefined;
};

function Links(props: LinkPropsType) {
  const { img, url, styles, name } = props;
  // const [back, setBack] = useState(["and"])
  // const [next, setNext] = useState(["and"])
  // useEffect(() => {
  //   localStorage.setItem("LocationDataBack", JSON.stringify(["and"])),
  //     localStorage.setItem("LocationDataNext", JSON.stringify(["and"]));
  // }, []);

  // function handleSaveData(e: React.FormEvent<HTMLAnchorElement>) {
  //   const storedData = localStorage.getItem("LocationDataBack");
  //   console.log(e);

  //   localStorage.setItem("LocationDataBack", JSON.stringify(storedData));
  // }
  return (
    <NavLink
      to={url}
      className={clsx(linkstyle.sidebar_section_link)}
      // onClick={(e) => handleSaveData(e)}
    >
      <img src={img} alt="icon link" />
      <p className={clsx(style[styles])}>{name}</p>
    </NavLink>
  );
}

export default Links;
