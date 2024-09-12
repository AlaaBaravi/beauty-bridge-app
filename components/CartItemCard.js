import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import DeleteButton from "./DeleteButton";
import { useSalonsContext } from "../store/context/context";
import Toast from "react-native-root-toast";

const CartItemCard = ({ item }) => {
  const { dispatch } = useSalonsContext();

  function handleDeleteItem() {
    dispatch({ type: "removeFromCart", payload: item.title });
    Toast.show(`${item.title} deleted from cart.`, {
      duration: Toast.durations.SHORT,
      backgroundColor: COLORS.danger400,
      containerStyle: {
        width: 200,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
      },
    });
  }

  return (
    <>
      <View style={{ flexDirection: "row-reverse" }}>
        <DeleteButton onClick={handleDeleteItem} />
      </View>
      <View style={{ gap: 12 }}>
        <Text>{item.title}</Text>
        <Text>{item.priceAfter}AED</Text>
      </View>

      <View style={{ gap: 12 }}>
        <View style={styles.rowContainer}>
          <Text>Tax(0%)</Text>
          <Text>0.00 AED</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>Discount(15%)</Text>
          <Text>0.00 AED</Text>
        </View>
        <Text style={[{ color: COLORS.grey700 }]}>
          ***By booking this order you will earn:
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.stampsContainer}>
            <Text>2 stamps</Text>
            <Image source={require("../assets/images/stamps.png")} />
          </View>
        </View>
      </View>
    </>
  );
};

export default CartItemCard;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stampsContainer: {
    backgroundColor: "#FFECB2",
    padding: 4,
    width: 100,
    alignItems: "center",
    borderRadius: 12,
  },
});
