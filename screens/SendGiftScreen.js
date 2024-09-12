import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Progress from "../components/Progress";
import { mainStyles } from "../constants/Globals";
import Typography from "../constants/Typography";
import COLORS from "../constants/Colors";

const PRICES = ["500", "5000", "10000"];

const SendGiftScreen = () => {
  return (
    <View style={mainStyles.container}>
      <Progress isActive={"Gift"} />
      <View style={styles.sendCreditContainer}>
        <Text style={[Typography.Title2, { marginBottom: 12 }]}>
          Send Credit
        </Text>

        <ScrollView horizontal>
          {PRICES.map((price, index) => {
            return (
              <View style={styles.creditContainer} key={index}>
                <View style={styles.creditPic}>
                  <Ionicons
                    name="gift"
                    size={24}
                    color={COLORS.succes500}
                    style={styles.giftIcon}
                  />
                  <Image source={require("../assets/images/money.png")}></Image>
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={[Typography.BodyBold, { color: COLORS.primary700 }]}
                  >
                    {price}AED
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SendGiftScreen;

const styles = StyleSheet.create({
  sendCreditContainer: {
    marginTop: 40,
  },
  creditContainer: {
    gap: 12,
    padding: 20,
    paddingLeft: 0,
  },
  creditPic: {
    backgroundColor: COLORS.primary100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 24,
    width: 100,
    height: 100,
  },
  giftIcon: {
    position: "absolute",
    transform: [{ translateY: -12 }, { translateX: 6 }],
    top: 0,
    right: 0,
  },
  textContainer: {
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 12,
    borderColor: COLORS.primary700,
  },
});
