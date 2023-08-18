import clsx from "clsx";

// -------------------------------------------------------------------------------

import style from "@/pages/Error/sass/style.module.scss";

// -------------------------------------------------------------------------------

function Error() {
  return (
    <div className={clsx(style.error)}>
      <h1>Error</h1>
    </div>
  );
}

export default Error;
