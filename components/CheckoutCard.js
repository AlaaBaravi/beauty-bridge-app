import { Dimensions, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/Colors";
import Typography from "../constants/Typography";
import { useSalonsContext } from "../store/context/context";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;

const CheckoutCard = () => {
  const { navigate } = useNavigation();
  const { state } = useSalonsContext();
  const totalPrice = state.cartItems
    .map((item) => item.priceAfter)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <View style={styles.checkoutContainer}>
      <View style={styles.totalPrice}>
        <Text style={styles.text}>Total:</Text>
        <Text style={styles.text}>{totalPrice} AED</Text>
      </View>
      <PrimaryButton
        title="Check out"
        onClick={() => navigate("CheckoutForm")}
      />
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  checkoutContainer: {
    height: height * 0.2,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 2,
    justifyContent: "space-between",
  },
  totalPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: COLORS.secondary800,
    ...Typography.Title2Bold,
  },
});
