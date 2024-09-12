import { StyleSheet, View } from "react-native";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import COLORS from "../constants/Colors";
import Step1 from "../components/checkout-form/Step1";
import Step2 from "../components/checkout-form/Step2";

const schema = z.object({
  name: z.string().min(6, "Name must be at least 2 characters").required(),
  email: z.string().email("Invalid email address").required(),
  date: z.string().date(),
  time: z.string().time(),
});

const CheckoutFormScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <ProgressSteps
        progressBarColor={COLORS.grey500}
        activeStepIconBorderColor={COLORS.primary600}
        activeStepNumColor={COLORS.primary700}
        activeLabelColor={COLORS.primary700}
        completedProgressBarColor={COLORS.primary300}
        completedStepIconColor={COLORS.primary300}
      >
        <ProgressStep
          label="Step 1"
          nextBtnTextStyle={styles.nextBtnTextStyle}
          onNext={handleSubmit(onSubmit)}
        >
          <View style={styles.stepContent}>
            <Step1 register={register} errors={errors} />
          </View>
        </ProgressStep>

        <ProgressStep
          label="Step 2"
          nextBtnTextStyle={styles.nextBtnTextStyle}
          previousBtnTextStyle={styles.nextBtnTextStyle}
        >
          <View style={styles.stepContent}>
            <Step2 />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default CheckoutFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
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
  nextBtnTextStyle: {
    color: COLORS.primary700,
  },
});
