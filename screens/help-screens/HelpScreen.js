import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { mainStyles } from "../../constants/Globals";
import Typography from "../../constants/Typography";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const SERVICES = [
  {
    title: "Need a help",
    to: "NeedHelp",
  },
  {
    title: "About",
    to: "About",
  },
  {
    title: "Terms & conditions",
    to: "Terms",
  },
  {
    title: "Privacy Policy",
    to: "PrivacyPolicy",
  },
];

const HelpScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={mainStyles.container}>
      {SERVICES.map((service, index) => (
        <Pressable
          key={index}
          style={styles.service}
          onPress={() => navigate(service.to)}
          android_ripple={{ color: mainStyles.ripple }}
        >
          <Text style={Typography.Body}>{service.title}</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={COLORS.grey700}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  service: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey500,
    paddingVertical: 8,
  },
});
