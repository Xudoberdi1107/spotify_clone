import { FaSearch } from "react-icons/fa";
import clsx from "clsx";

// ---------------------------------------------------

import inputstyle from "@/components/Layout/Header/sass/input.module.scss";

// ---------------------------------------------------

type InputSearchType = {};

// ---------------------------------------------------

function InputSearch(props: InputSearchType) {
  const {} = props;
  return (
    <div className={clsx(inputstyle.header_search)}>
      <label htmlFor="search">
        <FaSearch />
      </label>
      <input type="search" id="search" />
    </div>
  );
}

export default InputSearch;
