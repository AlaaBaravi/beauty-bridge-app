import { View, TextInput, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/Colors";
import SALONS from "../data/salonsData";
import SalonCard from "../components/SalonCard";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSalons, setFilteredSalons] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  function handleSearchQuery(query) {
    setSearchQuery(query);
    setFilteredSalons(
      query === ""
        ? []
        : SALONS.filter((salon) =>
            salon.name.toLowerCase().trim().includes(query.toLowerCase().trim())
          )
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={COLORS.grey800}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          placeholder="search by salon name"
          clearButtonMode="always"
          style={styles.textInput}
          value={searchQuery}
          onChangeText={(query) => handleSearchQuery(query)}
        />
      </View>

      <FlatList
        data={filteredSalons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SalonCard salon={item} />}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.grey600,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "80%",
  },

  textContainer: {
    gap: 4,
  },
  pressContiner: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.grey600,
    padding: 20,
    marginBottom: 20,
    borderRadius: 16,
  },
});
