import { StyleSheet, View } from "react-native";

import TopBar from "../features/home/TopBar";
import CollectStamps from "../features/home/CollectStamps";
import SalonsList from "../features/home/SalonsList";

function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <TopBar />
      <View style={styles.innerContainer}>
        <CollectStamps />
        <SalonsList />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
});
