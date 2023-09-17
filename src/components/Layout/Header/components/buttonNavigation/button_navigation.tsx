import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import clsx from "clsx";

// -------------------------------------------------------------------------------

import buttomstyle from "@/components/Layout/Header/components/buttonNavigation/button_navigatio.module.scss";

// -------------------------------------------------------------------------------

function ButtonNavigation() {
  // -------------------------------------------------------------------------------
  return (
    <div className={clsx(buttomstyle.location_buttons)}>
      <button>
        <FaAngleLeft />
      </button>
      <button>
        <FaAngleRight />
      </button>
    </div>
  );
}

export default ButtonNavigation;
