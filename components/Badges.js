import { View, Text, StyleSheet } from "react-native";

import Typography from "../constants/Typography";
import COLORS from "../constants/Colors";

const Badges = ({ isRecommended, isNew, discount, salonId }) => {
  return (
    <>
      {isRecommended && (
        <View style={styles.recommended}>
          <Text style={Typography.Caption}>Recommended</Text>
        </View>
      )}
      {
        <View style={styles.badges}>
          {discount > 0 && (
            <View style={styles.discount}>
              <Text style={Typography.Caption}>{discount}% off</Text>
            </View>
          )}
          {isNew && (
            <View style={styles.new}>
              <Text style={[Typography.Caption, { color: COLORS.white }]}>
                New
              </Text>
            </View>
          )}
        </View>
      }
    </>
  );
};

export default Badges;

const styles = StyleSheet.create({
  recommended: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: COLORS.primary500,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badges: {
    position: "absolute",
    top: "50%",
    right: 0,
    gap: 5,
  },
  new: {
    backgroundColor: COLORS.grey800,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 8,
  },
  discount: {
    backgroundColor: COLORS.danger200,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 8,
  },
});
