import { StyleSheet, View } from "react-native";

import { mainStyles } from "../constants/Globals";
import LocationPicker from "../components/LocationPicker";

const ChangeLocationScreen = () => {
  return (
    <View style={[mainStyles.container, { marginTop: 24 }]}>
      <LocationPicker />
    </View>
  );
};

export default ChangeLocationScreen;

const styles = StyleSheet.create({});
