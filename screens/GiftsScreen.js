import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GiftButton from "../components/GiftButton";
import { mainStyles } from "../constants/Globals";
import Typography from "../constants/Typography";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function GiftsScreen() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.giftsContainer}>
      <Image
        source={require("../assets/images/gift_banner.jpg")}
        alt="Gift banner"
        style={{
          width: width,
          height: height * 0.29,
        }}
      />
      <View style={mainStyles.container}>
        <GiftButton text="Send a Gift" onPress={() => navigate("SendGift")} />
        <View style={styles.textContainer}>
          <Text style={Typography.BodyBold}>Upcoming Gifts</Text>
          <Text style={[mainStyles.bodyText, { textAlign: "center" }]}>
            No Received gifts yet
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={Typography.BodyBold}>Sent Gifts</Text>
          <Text style={[mainStyles.bodyText, { textAlign: "center" }]}>
            No Sent gifts yet
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GiftsScreen;

const styles = StyleSheet.create({
  giftsContainer: { flex: 1, gap: 16 },
  textContainer: { gap: 16 },
});
