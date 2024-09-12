import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";

import SalonSummary from "../components/SalonSummary";
import SalonImages from "../features/salonsOverview/SalonImages";
import Stamps from "../features/salonsOverview/Stamps";
import SalonServices from "../features/salonsOverview/SalonServices";
import CartIcon from "../components/CartIcon";
import FavoriteIcon from "../components/FavoriteIcon";

const SalonsOverviewScreen = ({ navigation, route }) => {
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
      <SalonSummary salon={salon} details={true} />
      <SalonImages images={salon.images} />
      <Stamps />
      <SalonServices services={salon.services} />
    </View>
  );
};

export default SalonsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    gap: 20,
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
