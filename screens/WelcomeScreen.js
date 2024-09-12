import { Animated, Dimensions, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");

function WelcomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const opacityButterfly = useRef(new Animated.Value(1)).current;
  const opacityBrush = useRef(new Animated.Value(1)).current;
  const translateXButterFly = useRef(new Animated.Value(width)).current;
  const translateXBrush = useRef(new Animated.Value(width)).current;
  const translateYBrush = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateXButterFly, {
          toValue: 40,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateXBrush, {
          toValue: -40,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(translateYBrush, {
          toValue: -100,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]),

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityButterfly, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityBrush, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => navigation.navigate("BottomBar"));
  }, [
    translateXButterFly,
    translateXBrush,
    translateYBrush,
    fadeAnim,
    opacityButterfly,
    opacityBrush,
    navigation,
  ]);

  return (
    <LinearGradient
      colors={["#F0FCFF", "#E9E1EF"]}
      locations={[0.07, 0.97]}
      style={styles.splashContainer}
    >
      <Animated.View // Special animatable View
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateX: translateXButterFly }],
          opacity: opacityButterfly,
        }}
      >
        <Image
          source={require("../assets/images/butterfly.gif")}
          style={styles.butterfly}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            { translateX: translateXBrush },
            { translateY: translateYBrush },
          ],
          opacity: opacityBrush,
        }}
      >
        <Image
          source={require("../assets/images/brush.gif")}
          style={styles.brush}
        />
      </Animated.View>
    </LinearGradient>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 200, height: 200 },
  butterfly: {
    position: "absolute",
    width: 74,
    height: 42,
  },
  brush: {
    position: "absolute",
    width: 100,
    height: 200,
  },
});
