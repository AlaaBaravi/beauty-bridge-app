import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import Typography from "../constants/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import { mainStyles } from "../constants/Globals";

const GiftButton = ({ text, onPress }) => {
  return (
    <Pressable
      style={styles.giftButton}
      android_ripple={mainStyles.ripple}
      onPress={onPress}
    >
      <Text style={[{ color: COLORS.primary700 }, Typography.CaptionBold]}>
        {text}
      </Text>
      <Ionicons name="gift-outline" size={16} color={COLORS.primary700} />
    </Pressable>
  );
};

export default GiftButton;

const styles = StyleSheet.create({
  giftButton: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary500,
  },
});
