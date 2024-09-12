import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Typography from "../constants/Typography";
import SALONS from "../data/salonsData";
import SalonCard from "../components/SalonCard";
import COLORS from "../constants/Colors";
import { useSalonsContext } from "../store/context/context";

function FavoritesScreen() {
  const { state } = useSalonsContext();

  const favoriteSalons = SALONS.filter((salon) =>
    state.favIds.includes(salon.id)
  );

  return (
    <SafeAreaView style={styles.favoritesContainer}>
      {favoriteSalons.length === 0 ? (
        <View>
          <Text
            style={[
              Typography.Title2,
              {
                textAlign: "center",
                paddingHorizontal: 20,
                color: COLORS.primary800,
              },
            ]}
          >
            You don't have any favorites!
          </Text>
          <Text
            style={[
              Typography.Title2,
              {
                textAlign: "center",
                paddingHorizontal: 20,
                color: COLORS.primary800,
              },
            ]}
          >
            Start adding some.
          </Text>
        </View>
      ) : (
        <>
          <Text style={[Typography.Title2, { color: COLORS.primary800 }]}>
            Your favorite salons
          </Text>
          <FlatList
            keyExtractor={(item) => item.id}
            data={favoriteSalons}
            renderItem={({ item }) => <SalonCard salon={item} />}
          />
        </>
      )}
    </SafeAreaView>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 70,
    gap: 40,
  },
});
