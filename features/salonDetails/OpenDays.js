import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/Colors";
import Typography from "../../constants/Typography";

function OpenDays({ salon }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Ionicons name="time-outline" size={16} color={COLORS.grey800} />
        <Text style={styles.text}>Opening days</Text>
      </View>
      <View style={{ gap: 4 }}>
        {salon.openDays.map((day, index) => {
          return (
            <View
              key={index}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={Typography.Caption}>{day}</Text>
              <Text style={[Typography.Caption]}>
                {salon.openTime}am to {salon.closeTime}pm
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default OpenDays;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    borderBottomWidth: 1,
    borderColor: COLORS.grey300,
    paddingVertical: 20,
  },
  title: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text: {
    color: COLORS.grey800,
    fontSize: 10,
  },
});
