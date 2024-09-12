import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import SalonSummary from "../components/SalonSummary";
import SocialAccounts from "../features/salonDetails/SocialAccounts";
import Gallary from "../features/salonDetails/Gallary";
import OpenDays from "../features/salonDetails/OpenDays";
import FavoriteIcon from "../components/FavoriteIcon";
import CartIcon from "../components/CartIcon";

const SalonDetailsScreen = ({ navigation, route }) => {
  const salon = route.params.salon;

  useLayoutEffect(
    function () {
      navigation.setOptions({
        headerLeft: () => (
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </View>
        ),
        headerTitle: "",
        headerRight: () => (
          <View style={styles.iconsContainer}>
            <FavoriteIcon salon={salon} />
            <CartIcon />
          </View>
        ),
      });
    },
    [navigation, salon]
  );

  return (
    <View style={styles.container}>
      <SalonSummary salon={salon} />
      <SocialAccounts salon={salon} />
      <Gallary images={salon.images} />
      <OpenDays salon={salon} />
    </View>
  );
};

export default SalonDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  iconsContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 20,
  },
});
