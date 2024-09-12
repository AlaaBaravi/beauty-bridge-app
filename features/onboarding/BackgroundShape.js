import Svg, { Defs, Path, LinearGradient, Stop } from "react-native-svg";

function BackgroundShape({ width, height }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height * 0.75}
      viewBox="0 0 320 348"
    >
      <Path
        fill="url(#a)"
        fillRule="evenodd"
        d="M123.444-251.767c58.293 1.607 120.905-42.363 168.037 13.785 51.47 61.316 77.11 170.858 74.312 274.925-2.703 100.534-39.796 190.241-88.472 251.758-43.177 54.566-99.926 67.801-153.877 54.523C77.057 331.808 41.924 278.8 9.807 222.863c-30.737-53.534-53.023-114.027-62.22-185.92-12.34-96.451-40.457-214.553 2.058-284.352 42.518-69.801 113.575-6.019 173.799-4.358Z"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={150.098}
          x2={150.098}
          y1={-981.882}
          y2={1770.24}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.06} stopColor="#D0F6FF" />
          <Stop offset={0.45} stopColor="#836F8F" />
          <Stop offset={0.845} stopColor="#B89DCA" />
          <Stop offset={0.975} stopColor="#B89DCA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default BackgroundShape;
