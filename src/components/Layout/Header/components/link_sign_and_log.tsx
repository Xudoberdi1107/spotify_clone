import { Link } from "react-router-dom";
import clsx from "clsx";

// ---------------------------------------------------

import inputstyle from "@/components/Layout/Header/sass/link_sign_and_log.module.scss";

// ---------------------------------------------------

type InputSearchType = {};

// ---------------------------------------------------

function LinkSignAndLog(props: InputSearchType) {
  const {} = props;
  return (
    <div className={clsx(inputstyle.link_sign_and_log)}>
      <Link to={"/"} className={clsx(inputstyle.link1)}>
        Sign up
      </Link>
      <Link to={"/"} className={clsx(inputstyle.link2)}>
        Log in
      </Link>
    </div>
  );
}

export default LinkSignAndLog;
