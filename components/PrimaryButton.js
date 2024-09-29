import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";

const PrimaryButton = ({ title, onClick, disabled }) => {
  return (
    <Pressable
      style={[styles.button, { opacity: disabled ? 0.5 : 1 }]}
      onPress={onClick}
      disabled={disabled}
      android_ripple={{ color: COLORS.primary50 }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary800,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 32,
  },
  text: {
    color: COLORS.primary50,
  },
});
