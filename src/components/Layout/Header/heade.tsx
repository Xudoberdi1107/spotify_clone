import { useContext } from "react";
import { FaBars } from "react-icons/fa";

// ---------------------------------------------------

import style from "@/components/Layout/Header/sass/style.module.scss";
import {
  ButtonNavigation,
  InputSearch,
  LinkSignAndLog,
} from "@/components/Layout/Header/components";
import { MyContext } from "@/utils/context/myContextTwo";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

// ---------------------------------------------------

type HeaderProps = {
  isScroll: boolean;
};

// ---------------------------------------------------

function Header(props: HeaderProps) {
  const { isScroll } = props;

  // ---------------------------------------------------

  const { pathname } = useLocation();

  // ---------------------------------------------------

  const { dropMenu, setDropMenu } = useContext(MyContext);

  // ---------------------------------------------------

  const SidebarFunction = () => {
    setDropMenu(dropMenu ? false : true);
  };

  function isActive(path: string): boolean {
    return pathname.startsWith(path);
  }

  // ---------------------------------------------------

  return (
    <div className={ clsx(isScroll ? [style.header_2] : [style.header])}>
      <div className={clsx(style.header_left_components)}>
        <button onClick={() => SidebarFunction()} className={style.buttonMenu}>
          <FaBars />
        </button>
        <ButtonNavigation />
      </div>
      <div className={clsx(style.search)}>
        {isActive("/search") ? <InputSearch /> : <></>}
      </div>
      <div className={clsx(style.header_right_components)}>
        <LinkSignAndLog />
      </div>
    </div>
  );
}

export default Header;
