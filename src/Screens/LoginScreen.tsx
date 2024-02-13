import React, { useCallback } from "react";
import { View, StyleSheet, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { auth, signInWithEmailAndPassword } from "../firebase-utilities";
import { setLoading, setUser } from "../state-managment/reducers";
import { useForm, SubmitHandler } from "react-hook-form"
import { Text, Button } from "react-native-paper"
import { TextInput } from "@/components/input/TextInput";

type LoginFormData = {
  email: string;
  password: string;
}

export const useLoginScreen = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onLoginFormSubmit: SubmitHandler<LoginFormData> = useCallback(async (data) => {
    dispatch(setLoading(true));
    const { email, password } = data

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error(error.message);
      dispatch(setLoading(false));
    }
  }, [dispatch, signInWithEmailAndPassword])

  return {
    control,
    handleSubmit,
    onLoginFormSubmit
  }
}

export const LoginScreen = () => {
  const { control,
    handleSubmit,
    onLoginFormSubmit } = useLoginScreen();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Text style={{
              fontSize: 36,
              fontWeight: "bold"
            }}>Welcome Back!</Text>
            <Text variant="bodySmall">We're glad to see you back.</Text>
          </View>

          <View style={{
            marginVertical: 50,
            gap: 8
          }}>
            <TextInput control={control} name="email" label={"Your Email"} rules={{
              required: {
                value: true,
                message: "Please enter your email address",
              },
            }} />

            <TextInput secureTextEntry control={control} name="password" label={"Your Password"} rules={{
              required: {
                value: true,
                message: "Please enter your password",
              },
            }} />
          </View>

          <View style={{
            gap: 8
          }}>
            <Button mode="contained" onPress={handleSubmit(onLoginFormSubmit)}>Login</Button>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF4FF",
    paddingVertical: 75,
    paddingLeft: 24,
    paddingRight: 24,
  }
});
