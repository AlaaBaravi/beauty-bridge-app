import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { mainStyles } from "../constants/Globals";
import COLORS from "../constants/Colors";
import { useSalonsContext } from "../store/context/context";

const FavoriteIcon = ({ salon }) => {
  const { state, dispatch } = useSalonsContext();
  const salonIsFavorite = state.favIds.includes(salon.id);

  function handleFavorite() {
    if (salonIsFavorite) {
      dispatch({ type: "removeFavorite", payload: salon.id });
    } else {
      dispatch({ type: "addFavorite", payload: salon.id });
    }
  }

  return (
    <Pressable
      style={styles.favIcon}
      android_ripple={mainStyles.ripple}
      onPress={() => handleFavorite()}
    >
      <Ionicons
        name={`${salonIsFavorite ? "heart" : "heart-outline"}`}
        size={28}
        color={COLORS.primary500}
      />
    </Pressable>
  );
};

export default FavoriteIcon;

const styles = StyleSheet.create({
  favIcon: {
    borderWidth: 1,
    borderColor: COLORS.primary400,
    borderRadius: 5,
  },
});
