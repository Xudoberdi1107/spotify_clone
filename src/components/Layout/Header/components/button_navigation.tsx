import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import clsx from "clsx";

// -------------------------------------------------------------------------------

import buttomstyle from "@/components/Layout/Header/sass/button_navigatio.module.scss";

// -------------------------------------------------------------------------------

type ButtonPropstType = {};

// -------------------------------------------------------------------------------

function ButtonNavigation(props: ButtonPropstType) {
  const {} = props;
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
