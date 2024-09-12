import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../constants/Colors";
import { mainStyles } from "../../constants/Globals";

const SocialAccounts = ({ salon }) => {
  const openWebsite = () => {
    const url = salon.website;
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  const openInstagram = () => {
    const url = salon.instagram;
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={styles.social}>
      <View style={styles.rowContainer}>
        <Ionicons name="call-outline" size={16} color={COLORS.grey800} />
        <Text style={[styles.link, { color: COLORS.grey800 }]}>
          {salon.phone}
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <AntDesign name="earth" size={16} color={COLORS.grey800} />
        <Pressable onPress={openWebsite} android_ripple={mainStyles.ripple}>
          <Text style={styles.link}>{salon.website}</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Ionicons name="logo-instagram" size={16} color={COLORS.grey800} />
        <Pressable onPress={openInstagram} android_ripple={mainStyles.ripple}>
          <Text style={styles.link}>{salon.instagram}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SocialAccounts;

const styles = StyleSheet.create({
  social: {
    gap: 8,
    borderBottomWidth: 1,
    borderColor: COLORS.grey300,
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 8,
  },
  link: {
    textDecorationLine: "underline",
    color: COLORS.secondary700,
    fontSize: 10,
  },
});
