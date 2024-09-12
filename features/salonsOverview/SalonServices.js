import { View, Text, Pressable, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useMemo, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import COLORS from "../../constants/Colors";
import Typography from "../../constants/Typography";
import { mainStyles } from "../../constants/Globals";

const SalonServices = ({ services }) => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const { navigate } = useNavigation();
  const sheetRef = useRef();

  const snapPoints = useMemo(() => ["40%", "80%"], []);

  const renderServiceItem = ({ item }) => (
    <Pressable
      style={styles.categoryItem}
      onPress={() => setSelectedService(item)}
      android_ripple={mainStyles.ripple}
    >
      <Text style={Typography.Body}>{item.name}</Text>
    </Pressable>
  );

  const renderServiceItems = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={Typography.Body}>{item.title}</Text>
        <Text style={[Typography.Caption, { color: COLORS.grey700 }]}>
          {item.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPriceBefore}> {item.priceBefore}AED</Text>
          <Text style={styles.itemPriceAfter}>{item.priceAfter}AED</Text>
        </View>
      </View>
      <Pressable
        onPress={() =>
          navigate("Booking", {
            item: item,
            service: selectedService,
          })
        }
      >
        <FontAwesome6 name="square-plus" size={24} color="black" />
      </Pressable>
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Horizontal List with Fixed Height */}
        <View style={styles.horizontalListWrapper}>
          <BottomSheetFlatList
            horizontal
            data={services}
            renderItem={renderServiceItem}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* Vertical List with Remaining Height */}
        <View style={styles.verticalListWrapper}>
          <BottomSheetFlatList
            data={selectedService.items}
            renderItem={renderServiceItems}
            keyExtractor={(item, index) => index}
            contentContainerStyle={styles.verticalList}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default SalonServices;

const styles = StyleSheet.create({
  container: { flex: 1 },
  horizontalListWrapper: {
    height: 100,
  },
  horizontalList: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  verticalListWrapper: {
    flex: 1,
  },
  verticalList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryItem: {
    marginRight: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.grey300,
  },
  priceContainer: {
    marginTop: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  itemPriceBefore: {
    fontSize: 10,
    color: COLORS.grey700,
    textDecorationLine: "line-through",
  },
  itemPriceAfter: {
    fontSize: 13,
    color: COLORS.secondary800,
  },
});
