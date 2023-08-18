import { useState, ReactNode, useContext } from "react";

// -------------------------------------------------------------------------------

import style from "@/components/Layout/MineLayout/sass/style.module.scss";
import { Footer, Header, Sidebar } from "@/components/Layout";
import { MyContext } from "@/utils/context/myContextTwo";
import clsx from "clsx";

// -------------------------------------------------------------------------------

type TypeLayoutChild = {
  children: ReactNode;
};

// -------------------------------------------------------------------------------

function Layout(props: TypeLayoutChild) {
  const { children } = props;

  const [isScroll, setIsScroll] = useState<boolean>(false);

  const { dropMenu, setDropMenu } = useContext(MyContext);

  const changeScroll = (e: any) => {
    setIsScroll(e.target.scrollTop > 10);
  };

  const SidebarFunction = () => {
    setDropMenu(dropMenu ? false : true);
    console.log(dropMenu);
  };

  return (
    <div className={clsx(style.layout)}>
      <div className={clsx(dropMenu ? [style.sidebar_res] : [style.sidebar])}>
        <Sidebar />
      </div>
      <button
        className={clsx(dropMenu ? [style.buttontwo_res] : [style.buttontwo])}
        onClick={() => SidebarFunction()}
      ></button>

      <div className={clsx(style.pages)} onScroll={changeScroll}>
        <Header isScroll={isScroll} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
