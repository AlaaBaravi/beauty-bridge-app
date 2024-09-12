import { Dimensions } from "react-native";
import { G, Path, Svg, Stop, LinearGradient, Defs } from "react-native-svg";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function TopBarBackground() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height * 0.24}
      viewBox={`0 0 ${width} ${height * 0.24}`}
      fill="none"
    >
      <G filter="url(#filter0_i_94_692)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M296 102.413c58.223-.474 46.76 45.067 93.835 28.506 51.407-18.086 14.583-76.474 11.788-107.17-2.699-29.653-39.748-56.113-88.365-74.258-43.125-16.095-99.806-19.999-153.692-16.082-46.331 3.367-81.42 19.002-113.5 35.501-30.7 15.791-52.96 33.634-62.145 54.84-12.324 28.449-42.464 86.581 0 107.169C26.387 151.508 235.849 102.903 296 102.413z"
          fill="url(#paint0_linear_94_692)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_94_692"
          x1={189.5}
          y1={136}
          x2={189.5}
          y2={-68}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E9E1EF" />
          <Stop offset={1} stopColor="#F0FCFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
