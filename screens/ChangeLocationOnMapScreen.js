import { StyleSheet, View } from "react-native";
import Map from "../components/Map";

const ChangeLocationOnMapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};

export default ChangeLocationOnMapScreen;

const styles = StyleSheet.create({ container: { flex: 1 } });
