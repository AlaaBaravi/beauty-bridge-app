import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";

const PrimaryButton = ({ title, onClick }) => {
  return (
    <Pressable style={styles.button} onPress={onClick}>
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
