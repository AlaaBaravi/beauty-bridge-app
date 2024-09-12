import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchIcon from "./SearchIcon";
import NotificationIcon from "./NotificationIcon";
import COLORS from "../../constants/Colors";
import { mainStyles } from "../../constants/Globals";

const height = Dimensions.get("window").height;

const TopBar = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.topBar}>
      <View style={styles.topBarContent}>
        <Pressable
          onPress={() => navigate("ChangeLocation")}
          android_ripple={mainStyles.ripple}
        >
          <Text>LOCATION</Text>
        </Pressable>
        <View style={styles.iconsContainer}>
          <Pressable
            onPress={() => navigate("Search")}
            android_ripple={mainStyles.ripple}
          >
            <SearchIcon />
          </Pressable>
          <NotificationIcon />
        </View>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    height: height * 0.15,
    paddingBottom: 30,
    justifyContent: "flex-end",
    backgroundColor: COLORS.primary200,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  topBarContent: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
