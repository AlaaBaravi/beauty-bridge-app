import { View, FlatList, StyleSheet, Dimensions, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;

const SalonImages = ({ images }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.image} />
        )}
      />
    </View>
  );
};

export default SalonImages;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: windowWidth * 0.2, // Adjust the image width as needed
    height: windowWidth * 0.2, // Adjust the image height as needed
    marginHorizontal: 10,
    borderRadius: 16,
  },
});
