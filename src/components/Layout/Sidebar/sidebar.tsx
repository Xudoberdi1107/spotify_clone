import clsx from "clsx";
import { useLocation } from "react-router-dom";

// -------------------------------------------------------------------------------

import style from "@/components/Layout/Sidebar/sass/style.module.scss";
import routesData from "@/components/Layout/Sidebar/routesData";
import Logo from "@/components/Layout/Sidebar/components/logo";
import Links from "@/components/Layout/Sidebar/components/link";
// import React from "react";

// -------------------------------------------------------------------------------

function Sidebar() {
  const { pathname } = useLocation();

  function isActive(path: string): boolean {
    return pathname.startsWith(path);
  }

  return (
    <div className={clsx(style.sidebar)}>
      <Logo
        icon={routesData.logo_data[0].icon}
        id={routesData.logo_data[0].id}
        url={routesData.logo_data[0].url}
      />
      {routesData?.link_data?.map((e, i) => {
        return (
          <div key={i} className={clsx(style.sidebar_section)}>
            {e?.map((j, ji) => {
              return (
                <Links
                  key={ji}
                  url={j.url}
                  img={isActive(j.url) ? j.icon2 : j.icon}
                  name={j.name}
                  styles={isActive(j.url) ? "aktive2" : "aktive"}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
