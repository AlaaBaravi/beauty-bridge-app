import { View, Image } from "react-native";
import React from "react";

const SalonCardLogo = ({ logo }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        overflow: "hidden",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 40,
        elevation: 4,
        width: 67,
        height: 67,
      }}
    >
      <Image
        source={logo}
        style={{ width: 67, height: 67, resizeMode: "cover" }}
      />
    </View>
  );
};

export default SalonCardLogo;
