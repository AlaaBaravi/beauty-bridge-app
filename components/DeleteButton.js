import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../constants/Colors";
import Typography from "../constants/Typography";

const DeleteButton = ({ onClick }) => {
  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: COLORS.danger100, radius: 40 }}
      onPress={onClick}
    >
      <Ionicons name="trash-outline" size={18} color={COLORS.danger400} />
      <Text style={[Typography.Body, { color: COLORS.danger400 }]}>Delete</Text>
    </Pressable>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.danger400,
    paddingHorizontal: 8,
    paddingVertical: 4,
    overflow: "hidden",
  },
});
