import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Typography from "../../constants/Typography";
import COLORS from "../../constants/Colors";

const ThankYouScreen = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#F0FCFF", "#E9E1EF"]}
      style={styles.background}
    >
      {/* <MaterialCommunityIcons
          name="check-decagram"
          size={150}
          color="black"
        /> */}
      <Image
        source={require("../../assets/images/checked.gif")}
        style={styles.gif}
        resizeMode="contain"
      />
      <Text style={Typography.Title1Bold}>Thank You</Text>
      <Text style={[Typography.Body, styles.description]}>
        Problem sent to our support team and we will contact you soon and solve
        your problem
      </Text>
    </LinearGradient>
  );
};

export default ThankYouScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gif: {
    width: 150, // Set your desired width
    height: 150, // Set your desired height
  },
  description: {
    textAlign: "center",
    marginHorizontal: 32,
    marginVertical: 14,
    color: COLORS.grey900,
  },
});
