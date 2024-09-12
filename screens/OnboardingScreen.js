import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

import BackgroundShape from "../features/onboarding/BackgroundShape";
import SmallBackgroundShape from "../features/onboarding/SmallBackgroundShape";
import AppIntroSlider from "react-native-app-intro-slider";
import COLORS from "../constants/Colors";
import ButtonLabel from "../components/ButtonLabel";
import { slides } from "../data/onboardingData";
import Typography from "../constants/Typography";

const { width, height } = Dimensions.get("window");

function OnboardingScreen({ onDone }) {
  return (
    <AppIntroSlider
      data={slides}
      activeDotStyle={{
        backgroundColor: COLORS.purple800,
        width: 40,
      }}
      showSkipButton
      renderNextButton={() => <ButtonLabel label="Next" />}
      renderSkipButton={() => <ButtonLabel label="Skip" />}
      renderDoneButton={() => <ButtonLabel label="Start Now" />}
      onDone={onDone}
      renderItem={({ item }) => (
        <View style={styles.screenContainer}>
          <View style={styles.animationContainer}>
            <View style={styles.backgroundShape}>
              <BackgroundShape width={width} height={height} />
            </View>
            <View style={styles.smallBackgroundShape}>
              <SmallBackgroundShape>
                <Image source={item.image} style={item.style} />
              </SmallBackgroundShape>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text
              style={[Typography.Body, { color: "black", textAlign: "center" }]}
            >
              {item.title}
            </Text>
          </View>
        </View>
      )}
    />
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    fontSize: 24,
    width: "80%",
  },
  backgroundShape: {
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
  smallBackgroundShape: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
});
