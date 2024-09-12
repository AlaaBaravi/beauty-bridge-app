import { View, Image, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";

const CollectStampAnimation = ({ stampSteal }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {stampSteal && (
        <Image
          source={require("../../assets/images/stampSeal.png")}
          style={styles.stampSteal}
        />
      )}
      <Animated.View style={[styles.stamps, { transform: [{ rotate }] }]}>
        <Image source={require("../../assets/images/stamps.png")} />
      </Animated.View>

      <Image
        source={require("../../assets/images/stampWhiteBG.png")}
        height={"100%"}
        width={"100%"}
      />
    </View>
  );
};

export default CollectStampAnimation;

const styles = StyleSheet.create({
  stampSteal: {
    position: "absolute",
    top: 0,
    left: -10,
    zIndex: 1,
  },
  stamps: {
    position: "absolute",
    zIndex: 2,
  },
});
