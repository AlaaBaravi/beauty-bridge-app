import { StyleSheet } from "react-native";
import Typography from "./Typography";
import COLORS from "./Colors";

export const mainStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    gap: 32,
  },
  ripple: { color: COLORS.primary100 },
  bodyText: {
    ...Typography.Body,
    color: COLORS.grey700,
  },
});
