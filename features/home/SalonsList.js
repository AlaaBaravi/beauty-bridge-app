import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import SALONS from "../../data/salonsData";
import Typography from "../../constants/Typography";
import SalonCard from "../../components/SalonCard";

const SalonsList = () => {
  return (
    <View style={styles.salonsContainer}>
      <Text style={Typography.Title2}>Nearby Salons</Text>
      <FlatList
        data={SALONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SalonCard salon={item} />}
      />
    </View>
  );
};

export default SalonsList;

const styles = StyleSheet.create({
  salonsContainer: {
    flex: 1,
    marginBottom: 100,
    gap: 20,
  },
});
