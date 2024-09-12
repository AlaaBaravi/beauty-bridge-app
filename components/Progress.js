import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import COLORS from "../constants/Colors";

const Progress = ({ isActive, isDone }) => {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.bothContainer}>
        <View
          style={[
            styles.iconContainer,
            isDone === "Gift" && {
              backgroundColor: COLORS.primary500,
              borderStyle: "solid",
            },
            isActive === "Gift"
              ? { borderStyle: "dashed" }
              : {
                  borderColor: COLORS.primary200,
                },
          ]}
        >
          {isDone === "Gift" ? (
            <Ionicons name="checkmark" size={24} color="white" />
          ) : (
            <Ionicons
              name="gift"
              size={24}
              color={
                isActive === "Gift" ? COLORS.primary700 : COLORS.primary200
              }
            />
          )}
        </View>
        {isDone !== "Gift" && (
          <Text
            style={[
              styles.text,
              { color: isActive === "Gift" ? "black" : COLORS.grey700 },
            ]}
          >
            Gift
          </Text>
        )}
      </View>

      <View style={styles.seperator}></View>

      <View style={styles.bothContainer}>
        <View
          style={[
            styles.iconContainer,
            isDone === "Receiver" && {
              backgroundColor: COLORS.primary500,
              borderStyle: "solid",
            },
            isActive === "Receiver"
              ? { borderStyle: "dashed" }
              : {
                  borderColor: COLORS.primary200,
                },
          ]}
        >
          {isDone === "Receiver" ? (
            <Ionicons name="checkmark" size={24} color="white" />
          ) : (
            <Ionicons
              name="person"
              size={24}
              color={
                isActive === "Receiver" ? COLORS.primary700 : COLORS.primary200
              }
            />
          )}
        </View>
        {isDone !== "Receiver" && (
          <Text
            style={[
              styles.text,
              { color: isActive === "Receiver" ? "black" : COLORS.grey700 },
            ]}
          >
            Receiver
          </Text>
        )}
      </View>

      <View style={styles.seperator}></View>

      <View style={styles.bothContainer}>
        <View
          style={[
            styles.iconContainer,
            isDone === "Recap" && {
              backgroundColor: COLORS.primary500,
              borderStyle: "solid",
            },
            isActive === "Recap"
              ? { borderStyle: "dashed" }
              : {
                  borderColor: COLORS.primary200,
                },
          ]}
        >
          {isDone === "Recap" ? (
            <Ionicons name="checkmark" size={24} color="white" />
          ) : (
            <MaterialIcons
              name="restart-alt"
              size={32}
              color={
                isActive === "Recap" ? COLORS.primary700 : COLORS.primary200
              }
            />
          )}
        </View>
        {isDone !== "Recap" && (
          <Text
            style={[
              styles.text,
              { color: isActive === "Recap" ? "black" : COLORS.grey700 },
            ]}
          >
            Recap
          </Text>
        )}
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  iconsContainer: {
    paddingTop: 40,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bothContainer: {
    alignItems: "center",
    width: 60,
  },
  iconContainer: {
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.primary700,
  },
  seperator: {
    height: 1,
    flex: 1,
    backgroundColor: COLORS.primary300,
  },
  text: {
    position: "absolute",
    bottom: -30,
    color: COLORS.grey700,
  },
});
