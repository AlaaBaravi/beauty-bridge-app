import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import COLORS from "../constants/Colors";
import Typography from "../constants/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import GiftButton from "../components/GiftButton";
import BookingButton from "../components/BookingButton";
import { mainStyles } from "../constants/Globals";

const BookingScreen = ({ navigation, route }) => {
  const item = route.params.item;
  const serviceName = route.params.service.name;

  useLayoutEffect(
    function () {
      navigation.setOptions({
        headerRight: () => (
          <Pressable
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}
            android_ripple={mainStyles.ripple}
          >
            <Ionicons name="close-outline" size={24} color="black" />
          </Pressable>
        ),
        headerTitle: () => (
          <View style={styles.titleContainer}>
            <Text>{serviceName}</Text>
          </View>
        ),
        headerLeft: "",
        headerTitleAlign: "center",
      });
    },
    [navigation, serviceName]
  );

  return (
    <View style={styles.contentContainer}>
      <View style={styles.rowContainer}>
        <Text style={Typography.Title2}>{item.title}</Text>
        <Text style={[Typography.Title2Bold, { color: COLORS.secondary800 }]}>
          {item.priceAfter} AED
        </Text>
      </View>
      <Text style={[Typography.Body, { color: COLORS.grey700 }]}>
        {item.description}
      </Text>
      <View style={styles.buttonsContainer}>
        <BookingButton item={item} />
        <GiftButton text="Send as a Gift" />
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 16,
    gap: 16,
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 20,
    backgroundColor: COLORS.grey200,
    borderRadius: 8,
    padding: 2,
  },
  titleContainer: {
    margin: "auto",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    gap: 16,
  },
});
