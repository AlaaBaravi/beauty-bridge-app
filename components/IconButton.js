import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../constants/Colors";
import Typography from "../constants/Typography";

export default function IconButton({ label, iconName, focused }) {
  return (
    <View>
      {focused ? (
        <LinearGradient
          colors={[
            COLORS.primary300,
            COLORS.primary400,
            COLORS.primary500,
            COLORS.primary700,
          ]}
          // locations={[-0.8547, 0.8544, 2.5854, 3.1551]}
          locations={[0, 0.2, 0.5, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.iconContainer}
        >
          <Ionicons name={`${iconName}-sharp`} size={16} color={COLORS.white} />
          <Text style={[{ color: COLORS.white }, Typography.Caption]}>
            {label}
          </Text>
        </LinearGradient>
      ) : (
        <Ionicons
          name={`${iconName}-outline`}
          size={16}
          color={COLORS.grey700}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    padding: 8,
    height: 40,
    borderRadius: 40,
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
