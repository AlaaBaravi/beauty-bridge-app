import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PrimaryButton from "../PrimaryButton";

const Step2 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (dateTime) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const readableTime = dateTime.toLocaleTimeString("en-US", options);
    console.log("A Time has been picked: ", readableTime);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <PrimaryButton title="Select Date" onClick={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <PrimaryButton title="Select Time" onClick={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
