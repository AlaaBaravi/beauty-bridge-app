import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

import COLORS from "../constants/Colors";
import Typography from "../constants/Typography";
import { mainStyles } from "../constants/Globals";
import { useSalonsContext } from "../store/context/context";
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";

const BookingButton = ({ item }) => {
  const navigation = useNavigation();
  const { state, dispatch } = useSalonsContext();
  const salonCart = state.salons
    .filter((salon) => salon.id === state.salonCartId)
    .at(0);

  function handleCheckSalonCart() {
    if (item.salonId !== state.salonCartId && state.salonCartId !== null) {
      Alert.alert(
        "Confirmation", // Title of the alert
        `This will delete the ${salonCart.name} cart, Do you want to proceed?`,
        [
          {
            text: "No",
            onPress: () => undefined,
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              dispatch({ type: "clearCart" });
              dispatch({ type: "addSalonCart", payload: item.salonId });

              handleAddToCart();
            },
          },
        ],
        { cancelable: false }
      );
      return;
    }

    handleAddToCart();
  }

  function handleAddToCart() {
    if (state.cartItems.length === 0) {
      dispatch({ type: "addSalonCart", payload: item.salonId });
    }

    if (
      state.cartItems.map((cartItem) => cartItem.title).includes(item.title) &&
      state.salonCartId === item.salonId
    ) {
      Toast.show("This service already existing in cart.", {
        duration: Toast.durations.LONG,
        backgroundColor: COLORS.danger200,
        containerStyle: {
          width: 200,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        },
      });
      return;
    }

    dispatch({ type: "addToCart", payload: item });
    Toast.show("Added to cart.", {
      duration: Toast.durations.SHORT,
      backgroundColor: COLORS.succes700,
      containerStyle: {
        width: 200,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
      },
    });
    navigation.goBack();
  }

  return (
    <Pressable
      android_ripple={mainStyles.ripple}
      onPress={() => handleCheckSalonCart()}
    >
      <LinearGradient
        colors={[
          COLORS.primary300,
          COLORS.primary400,
          COLORS.primary500,
          COLORS.primary700,
        ]}
        // locations={[-0.8547, 0.8544, 2.5854, 3.1551]}
        locations={[0, 0.2, 0.5, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.cartButton}
      >
        <Text style={[{ color: COLORS.white }, Typography.CaptionBold]}>
          Add to cart
        </Text>
        <Ionicons name="bag-add" size={16} color={COLORS.white} />
      </LinearGradient>
    </Pressable>
  );
};

export default BookingButton;

const styles = StyleSheet.create({
  cartButton: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
});
