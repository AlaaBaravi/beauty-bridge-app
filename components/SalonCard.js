import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../constants/Colors";
import Typography from "../constants/Typography";
import Badges from "./Badges";
import SalonCardLogo from "./SalonCardLogo";
import { mainStyles } from "../constants/Globals";
import FavoriteIcon from "./FavoriteIcon";

const SalonCard = ({ salon }) => {
  const {
    id,
    name,
    location,
    distance,
    rating,
    numOfReviews,
    isRecommended,
    isNew,
    discount,
    logo,
  } = salon;

  const { navigate } = useNavigation();

  return (
    <Pressable
      style={styles.pressContiner}
      onPress={() => navigate("SalonsOverview", { salon: salon })}
      android_ripple={mainStyles.ripple}
    >
      <View
        style={[
          styles.salonContainer,
          { borderColor: isRecommended ? COLORS.primary500 : COLORS.grey500 },
        ]}
      >
        <Badges
          isRecommended={isRecommended}
          isNew={isNew}
          discount={discount}
          salonId={id}
        />
        <View style={styles.iconFavContainer}>
          <FavoriteIcon salon={salon} />
        </View>
        <SalonCardLogo logo={logo} />
        <View style={styles.textContainer}>
          <View>
            <Text style={Typography.Body}>{name}</Text>
          </View>
          <Text style={Typography.Caption}>{location}</Text>
          <View style={styles.deatils}>
            <View style={styles.rowEnd}>
              <Ionicons name="location-outline" size={16} color="black" />
              <Text style={Typography.Caption}>{distance}KM</Text>
            </View>
            <View style={styles.rowEnd}>
              <Ionicons name="star" size={16} color={COLORS.gold} />
              <Text style={Typography.Caption}>
                {rating} ({numOfReviews} reviews)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SalonCard;

const styles = StyleSheet.create({
  salonContainer: {
    flex: 1,
    borderWidth: 1,
    padding: 20,
    borderRadius: 16,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  iconFavContainer: {
    // marginHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.grey400,
    borderRadius: 5,
  },
  textContainer: {
    gap: 4,
  },
  pressContiner: {
    marginBottom: 20,
  },
  deatils: {
    flexDirection: "row",
    gap: 20,
  },

  rowEnd: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
