import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { Avatar } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

import COLORS from "../constants/Colors";
import NotificationIcon from "../features/home/NotificationIcon";
import Typography from "../constants/Typography";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;

const settings = [
  {
    title: "My orders",
    icon: <Ionicons name="shirt-outline" size={24} color="black" />,
  },
  {
    title: "Payment",
    icon: <Ionicons name="wallet-outline" size={24} color="black" />,
  },
  {
    title: "Language",
    icon: <Ionicons name="earth-outline" size={24} color="black" />,
  },
  {
    title: "Contact us",
    icon: (
      <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
    ),
  },
  {
    title: "Help",
    icon: <Ionicons name="help-circle-outline" size={24} color="black" />,
    to: "Help",
  },
  {
    title: "Log Switch account",
    icon: <Ionicons name="log-out-outline" size={24} color="black" />,
  },
];

export default function ProfileScreen() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.topBar}>
        <View style={styles.rowContainer}>
          <Text
            style={[Typography.Title2Bold, { textTransform: "capitalize" }]}
          >
            My account
          </Text>
          <NotificationIcon />
        </View>
        <View style={styles.avatarContainer}>
          <Avatar
            size={48}
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",
            }}
          />
          <Text style={Typography.Title2}>Yomna Ashraf</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {settings.map((setting, index) => (
          <Pressable
            key={index}
            style={styles.settingContainer}
            onPress={() => navigate(setting.to)}
          >
            {setting.icon}
            <Text>{setting.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  topBar: {
    height: height * 0.25,
    justifyContent: "space-between",
    gap: 4,
    backgroundColor: COLORS.primary200,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  mainContainer: {
    marginHorizontal: 20,
    marginVertical: 32,
    gap: 16,
  },
  settingContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.grey600,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
