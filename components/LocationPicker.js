import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";

import COLORS from "../constants/Colors";
import { mainStyles } from "../constants/Globals";
import Typography from "../constants/Typography";
// import { useNavigation } from "@react-navigation/native";

const LocationPicker = () => {
  //   const { navigate } = useNavigation();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );

      return false;
    }
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <>
      <View style={styles.mapPreview}></View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.buttonContainer}
          android_ripple={mainStyles.ripple}
          onPress={getLocationHandler}
        >
          <Text style={Typography.Body}>Current location</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          android_ripple={mainStyles.ripple}
          onPress={pickOnMapHandler}
        >
          <Text style={Typography.Body}>Change location on map</Text>
          <FontAwesome6 name="chevron-right" size={16} color="black" />
        </Pressable>
      </View>
    </>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary400,
    borderRadius: 8,
  },
  buttonsContainer: { gap: 16 },
  buttonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary400,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
