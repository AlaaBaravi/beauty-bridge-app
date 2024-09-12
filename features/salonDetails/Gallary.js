import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Text,
  Pressable,
  Modal,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";

import COLORS from "../../constants/Colors";
import { mainStyles } from "../../constants/Globals";

const windowWidth = Dimensions.get("window").width;

const Gallary = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openImage = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Ionicons name="camera-outline" size={16} color={COLORS.grey800} />
        <Text style={styles.text}>Gallary</Text>
      </View>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => openImage(item.image)}
            android_ripple={mainStyles.ripple}
          >
            <Image source={item.image} style={styles.image} />
          </Pressable>
        )}
      />

      {selectedImage && (
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={closeModal}
        >
          <Pressable
            style={styles.modalBackground}
            onPress={closeModal}
            android_ripple={mainStyles.ripple}
          >
            <Image source={selectedImage} style={styles.fullImage} />
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

export default Gallary;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    borderBottomWidth: 1,
    borderColor: COLORS.grey300,
    paddingVertical: 20,
  },
  image: {
    width: windowWidth * 0.3, // Adjust the image width as needed
    height: windowWidth * 0.3, // Adjust the image height as needed
    marginRight: 20,
    borderRadius: 16,
    objectFit: "cover",
  },
  title: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text: {
    color: COLORS.grey800,
    fontSize: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 100)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    height: "50%",
    objectFit: "contain",
  },
});
