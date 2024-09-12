import { Button, StyleSheet, View } from "react-native";
import React from "react";

const LocationPicker = () => {
  function handleGetLocation() {}
  function handleGetOnMap() {}

  return (
    <View>
      <View></View>
      <View>
        <Button title="Locate User" onPress={handleGetLocation} />
        <Button title="Pick On Map" onPress={handleGetOnMap} />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({});
