import React from "react";
import { Path, Svg } from "react-native-svg";

const SearchIcon = () => {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.133 10.933a4.8 4.8 0 100-9.6 4.8 4.8 0 000 9.6z"
        fill="#fff"
        stroke="#000"
      />
      <Path
        d="M6.133 3.733a2.4 2.4 0 00-2.4 2.4m9.6 7.2l-2.4-2.4 2.4 2.4z"
        fill="#fff"
      />
      <Path
        d="M6.133 3.733a2.4 2.4 0 00-2.4 2.4m9.6 7.2l-2.4-2.4"
        stroke="#000"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
