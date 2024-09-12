import { Text, Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Typography from "../../constants/Typography";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { mainStyles } from "../../constants/Globals";

const ViewDetails = ({ salon }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigate("SalonDetails", { salon: salon })}
        android_ripple={mainStyles.ripple}
      >
        <View style={styles.innerContainer}>
          <Text style={[Typography.Body, { color: COLORS.grey700 }]}>
            View Details
          </Text>
          <Ionicons
            name="chevron-forward-outline"
            size={16}
            color="black"
            onPress={() => {}}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default ViewDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
});
