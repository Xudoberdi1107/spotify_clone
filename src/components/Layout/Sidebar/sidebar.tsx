import clsx from "clsx";
import { useLocation } from "react-router-dom";

// -------------------------------------------------------------------------------

import style from "@/components/Layout/Sidebar/sass/style.module.scss";
import routesData from "@/components/Layout/Sidebar/routesData";
import Logo from "@/components/Layout/Sidebar/components/logo";
import Links from "@/components/Layout/Sidebar/components/link";

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
                  url={j.url}
                  id={ji}
                  img={
                    <img src={isActive(j.url) ? j.icon2 : j.icon} alt="icon" />
                  }
                  urlText={
                    <p
                      className={clsx(
                        isActive(j.url) ? [style.aktive2] : [style.aktive]
                      )}
                    >
                      {j.name}
                    </p>
                  }
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
