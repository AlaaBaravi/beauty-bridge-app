import { Pressable, StyleSheet, Text, View } from "react-native";
import { mainStyles } from "../constants/Globals";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../constants/Colors";
import { useSalonsContext } from "../store/context/context";

const CartIcon = () => {
  const navigation = useNavigation();
  const { state } = useSalonsContext();

  return (
    <Pressable
      android_ripple={mainStyles.ripple}
      onPress={() => navigation.navigate("Cart")}
    >
      <View style={styles.numberContainer}>
        <Text style={styles.text}>{state.cartItems.length}</Text>
      </View>
      <Ionicons name="bag-outline" size={32} color={COLORS.primary500} />
    </Pressable>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  numberContainer: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: COLORS.primary700,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -4 }, { translateX: 4 }],
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});
