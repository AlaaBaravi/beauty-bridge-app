import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function SmallBackgroundShape({ children }) {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={300}
        height={340}
        fill="none"
        viewBox="0 0 220 220"
      >
        <Path
          fill="#F8F5FA"
          fillRule="evenodd"
          d="M122.359.58c30.789 5.441 36.26 46.894 52.318 73.842 10.173 17.072 18.121 33.281 23.006 52.564 7.602 30.013 30.478 63.144 12.717 88.455-17.976 25.616-56.847 18.605-88.041 18.884-31.623.283-65.845 3.654-89.625-17.292-24.817-21.86-35.23-57.024-32.233-90.047 2.779-30.623 25.917-52.91 47.21-74.998C69.53 29.355 91.474-4.877 122.36.58Z"
          clipRule="evenodd"
          opacity={0.32}
        />
      </Svg>
      <View style={styles.children}>{children}</View>
    </View>
  );
}

export default SmallBackgroundShape;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  children: {
    position: "absolute",
    top: 100,
  },
});
