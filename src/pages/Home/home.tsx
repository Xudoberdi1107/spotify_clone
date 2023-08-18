// -------------------------------------------------------------------------------

import style from "@/pages/Home/sass/style.module.scss";
import clsx from "clsx";
import { useState } from "react";

// -------------------------------------------------------------------------------

function Home() {
  const [logo, setLogo] = useState<boolean>(false)
  
  return (
    <div className={clsx(logo? [style.home] : [style.home2])}>
      <h1>Home</h1>
      <button onClick={()=>setLogo(logo? false : true)}>let</button>
    </div>
  );
}
export default Home;