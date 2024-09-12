import { StyleSheet, View } from "react-native";
import React from "react";

import Details from "../features/salonsOverview/Details";
import ViewDetails from "../features/salonsOverview/ViewDetails";
import COLORS from "../constants/Colors";
import SalonCardLogo from "./SalonCardLogo";

const SalonSummary = ({ salon, details }) => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <SalonCardLogo logo={salon.logo} />
        <Details salon={salon} />
      </View>
      {details && <ViewDetails salon={salon} />}
    </View>
  );
};

export default SalonSummary;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.grey300,
    padding: 15,
  },
  summaryContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
