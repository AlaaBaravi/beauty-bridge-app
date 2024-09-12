import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  FavoritesScreen,
  GiftsScreen,
  HomeScreen,
  ProfileScreen,
} from "../screens";
import IconButton from "./IconButton";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    height: 74,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    lazy: false,
  },
};

export default function BottomNavigationBar() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IconButton label="Home" iconName="home" focused={focused} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IconButton
                label="Favorites"
                iconName="heart"
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Gifts"
        component={GiftsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IconButton label="Gifts" iconName="gift" focused={focused} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <IconButton label="Profile" iconName="person" focused={focused} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
