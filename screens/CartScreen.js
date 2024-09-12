import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSalonsContext } from "../store/context/context";
import { mainStyles } from "../constants/Globals";
import Typography from "../constants/Typography";
import COLORS from "../constants/Colors";
import SalonCardLogo from "../components/SalonCardLogo";
import CartItemCard from "../components/CartItemCard";
import CheckoutCard from "../components/CheckoutCard";

const height = Dimensions.get("window").height;

const CartScreen = () => {
  const { state } = useSalonsContext();
  const salonCart = state.salons
    .filter((salon) => salon.id === state.salonCartId)
    .at(0);

  return (
    <View style={styles.screenContainer}>
      {state.cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Your cart is empty. Start adding some items.
          </Text>
        </View>
      ) : (
        <>
          <View style={{ height: height * 0.2 }}>
            <View style={styles.cartNameContainer}>
              <SalonCardLogo logo={salonCart.logo} />
              <Text style={Typography.Title2}>{salonCart.name} Cart</Text>
            </View>
            <View style={[mainStyles.container, { marginVertical: 12 }]}>
              <Text style={Typography.Title2}>Preview Order</Text>
            </View>
          </View>
          <ScrollView style={{ flex: 1, gap: 24 }}>
            {state.cartItems.map((item, index) => {
              return (
                <View key={index} style={styles.itemContainer}>
                  <CartItemCard item={item} />
                </View>
              );
            })}
          </ScrollView>
          <CheckoutCard />
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  emptyText: {
    color: COLORS.primary800,
    ...Typography.Title2,
    textAlign: "center",
  },
  itemContainer: {
    flex: 1,
    padding: 20,
    gap: 32,
    backgroundColor: COLORS.grey50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.grey400,
  },
  cartNameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginVertical: 16,
  },
});
