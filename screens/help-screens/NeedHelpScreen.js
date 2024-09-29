import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

import { mainStyles } from "../../constants/Globals";
import COLORS from "../../constants/Colors";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const NeedHelpScreen = () => {
  const [textArea, setTextArea] = useState("");
  const { navigate } = useNavigation();

  return (
    <View style={mainStyles.container}>
      <TextInput
        multiline={true}
        numberOfLines={8}
        style={styles.textArea}
        placeholder="Write here"
        value={textArea}
        onChangeText={(text) => setTextArea(text)}
      />
      <PrimaryButton
        title="send"
        disabled={textArea === ""}
        onClick={() => {
          console.log(textArea);
          navigate("ThankYou");
        }}
      />
    </View>
  );
};

export default NeedHelpScreen;

const styles = StyleSheet.create({
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.grey500,
    borderRadius: 8,
    padding: 16,
    textAlignVertical: "top",
  },
});
