import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootSiblingParent } from "react-native-root-siblings";

import {
  WelcomeScreen,
  OnboardingScreen,
  SalonsOverviewScreen,
  SalonDetailsScreen,
} from "./screens";
import BookingScreen from "./screens/BookingScreen";
import SearchScreen from "./screens/SearchScreen";
import BottomNavigationBar from "./components/BottomNavigationBar";
import ChangeLocationOnMapScreen from "./screens/ChangeLocationOnMapScreen";
import ChangeLocationScreen from "./screens/ChangeLocationScreen";
import CartScreen from "./screens/CartScreen";
import SendGiftScreen from "./screens/SendGiftScreen";
import CheckoutFormScreen from "./screens/CheckoutFormScreen";
import SalonsContextProvider from "./store/context/context";
import HelpScreen from "./screens/help-screens/HelpScreen";
import NeedHelpScreen from "./screens/help-screens/NeedHelpScreen";
import AboutScreen from "./screens/help-screens/AboutScreen";
import TermsScreen from "./screens/help-screens/TermsScreen";
import PrivacyPolicyScreen from "./screens/help-screens/PrivacyPolicyScreen";
import ThankYouScreen from "./screens/help-screens/ThankYouScreen";

const translations = {
  en: { welcome: "Hello" },
  ar: { welcome: "مرحبا" },
};
const i18n = new I18n(translations);
i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.enableFallback = true;

const Stack = createStackNavigator();

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(null);
  const [loaded, error] = useFonts({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    async function checkOnboarding() {
      try {
        const value = await AsyncStorage.getItem("hasSeenOnboarding");
        if (value === null) {
          setShowOnboarding(true);
        } else {
          setShowOnboarding(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    checkOnboarding();
  }, []);

  const onDone = async () => {
    try {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
      setShowOnboarding(false);
    } catch (e) {
      // Error saving data
      console.error(e);
    }
  };

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  if (showOnboarding === null) {
    return null; // Splash screen is shown automatically
  }

  if (showOnboarding) {
    return <OnboardingScreen onDone={onDone} />;
  }

  return (
    <RootSiblingParent>
      <SalonsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ cardStyle: { backgroundColor: "white" } }}
          >
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="BottomBar"
              component={BottomNavigationBar}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SalonsOverview"
              component={SalonsOverviewScreen}
            />
            <Stack.Screen name="SalonDetails" component={SalonDetailsScreen} />
            <Stack.Screen name="Booking" component={BookingScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen
              name="ChangeLocation"
              component={ChangeLocationScreen}
            />
            <Stack.Screen
              name="ChangeLocationOnMap"
              component={ChangeLocationOnMapScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="CheckoutForm" component={CheckoutFormScreen} />
            <Stack.Screen name="Help" component={HelpScreen} />
            <Stack.Screen
              name="NeedHelp"
              component={NeedHelpScreen}
              options={{ headerTitle: "Need a help" }}
            />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Terms" component={TermsScreen} />
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicyScreen}
            />
            <Stack.Screen
              name="ThankYou"
              component={ThankYouScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendGift"
              component={SendGiftScreen}
              options={{ headerTitle: "Send Gift" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SalonsContextProvider>
    </RootSiblingParent>
  );
};

export default App;
