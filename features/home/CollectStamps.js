import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import Typography from "../../constants/Typography";
import CollectStampAnimation from "./CollectStampAnimation";

const CollectStamps = () => {
  return (
    <View style={styles.stampsContainer}>
      <CollectStampAnimation stampSteal={true} />
      <View style={styles.textContainer}>
        <Text style={Typography.BodyBold}>Collect Stamps</Text>
        <Text style={Typography.Caption}>
          from our beauty salons to get more offers%
        </Text>
      </View>
    </View>
  );
};

export default CollectStamps;

const styles = StyleSheet.create({
  stampsContainer: {
    backgroundColor: COLORS.primary500,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20,
    marginVertical: 20,
  },
  textContainer: {
    width: "55%",
  },
});
