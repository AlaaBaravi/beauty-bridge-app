import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../constants/Colors";
import Typography from "../../constants/Typography";
import isSalonOpen from "../../util/isSalonOpen";

const Details = ({ salon }) => {
  const isOpen = isSalonOpen(salon);

  return (
    <View style={styles.detailsContainer}>
      <Text style={Typography.Body}>{salon.name}</Text>
      <View style={styles.rowEnd}>
        <Ionicons name="star" size={16} color={COLORS.gold} />
        <Text style={[Typography.Caption, { color: COLORS.grey700 }]}>
          {salon.rating} ({salon.numOfReviews} reviews)
        </Text>
      </View>
      <View style={styles.distance}>
        <Ionicons name="location-outline" size={16} color="black" />
        <Text style={[Typography.Caption, { textDecorationLine: "underline" }]}>
          {salon.distance}KM away
        </Text>
      </View>
      <View style={styles.time}>
        <View style={styles.circle}></View>
        <Text
          style={[
            Typography.Caption,
            { color: isOpen ? COLORS.succes500 : COLORS.danger200 },
          ]}
        >
          {isOpen ? "Open now" : "Closed"}
        </Text>
        <Text style={[Typography.Caption, { color: COLORS.grey700 }]}>
          ({salon.openTime}am to {salon.closeTime}pm)
        </Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailsContainer: {
    gap: 6,
    alignItems: "flex-start",
  },
  rowEnd: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
  },
  distance: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
    borderWidth: 1,
    borderColor: COLORS.grey600,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  time: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.succes500,
  },
});
