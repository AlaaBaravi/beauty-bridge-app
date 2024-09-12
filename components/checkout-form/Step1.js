import { StyleSheet, Text, TextInput } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";

const Step1 = ({ register, errors }) => {
  return (
    <>
      <Text style={styles.label}>
        Name <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex; Yomna Ashraf Ahmed"
        {...register("name")}
      />
      {errors.name && <Text>{errors.name.message}</Text>}

      <Text style={styles.label}>
        E-mail <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="yomna@gmail.com"
        {...register("email")}
      />
      {errors.email && <Text>{errors.email.message}</Text>}
    </>
  );
};

export default Step1;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginHorizontal: 5,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  required: {
    color: COLORS.danger500,
  },
});
