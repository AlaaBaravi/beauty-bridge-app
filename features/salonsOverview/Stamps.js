import { View, Text, StyleSheet, Image } from "react-native";
import COLORS from "../../constants/Colors";
import Typography from "../../constants/Typography";

const Stamps = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stampsContainer}>
        <Text style={[Typography.Body, { color: COLORS.grey700 }]}>0</Text>
        <View style={styles.title}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/stamps.png")}
              style={styles.image}
            />
          </View>
          <Text style={Typography.Caption}>Stamps Collected</Text>
        </View>
      </View>
    </View>
  );
};

export default Stamps;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  stampsContainer: {
    width: "50%",
    backgroundColor: COLORS.primary500,
    opacity: 0.32,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  imageContainer: {
    width: 24,
    height: 24,
  },
  image: {
    resizeMode: "contain",
    width: null,
    height: null,
    flex: 1,
  },
});
