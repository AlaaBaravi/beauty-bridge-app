import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

export default function Map() {
  return (
    <>
      <MapView
        style={styles.map}
        zoomEnabled
        zoomTapEnabled
        zoomControlEnabled
      />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
