import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function ButtonLabel({ label }) {
  if (label !== "Skip") {
    return (
      <LinearGradient
        colors={["#8aa5ac", "#836F8F", "#B89DCA", "#B89DCA"]}
        locations={[-0.85, 0.85, 2.6, 3.15]}
        style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16 }}
      >
        <Text style={{ color: "white" }}>{label}</Text>
      </LinearGradient>
    );
  }
  return (
    <View
      style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16 }}
    >
      <Text>{label}</Text>
    </View>
  );
}

export default ButtonLabel;
