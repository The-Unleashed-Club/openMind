import React, { useCallback } from "react";
import { View, StyleSheet, Alert, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

import { setLoading, setUser } from "../state-managment/reducers";
import { useDispatch } from "react-redux";
import {
  db, collection, addDoc, auth,
  createUserWithEmailAndPassword,
} from "../firebase-utilities";
import { TextInput } from "@/components/input/TextInput";
import { useForm, SubmitHandler } from "react-hook-form"
import { Text, Button } from "react-native-paper"

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export const useSignupScreen = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
  } = useForm<SignupFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
  })

  const onSignupFormSubmit: SubmitHandler<SignupFormData> = useCallback(async (data) => {
    const { name, email, password, rePassword } = data;

    if (password !== rePassword) {
      Alert.alert("Password Do not match, please try again");
    } else {
      dispatch(setLoading(true));
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const docRef = await addDoc(collection(db, "users"), {
          name: name,
          email: email,
        });
        dispatch(setUser(userCredentials.user))
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error", error);
      }

      dispatch(setLoading(false));
    }
  }, [dispatch, createUserWithEmailAndPassword])

  return {
    control,
    handleSubmit,
    onSignupFormSubmit
  }
}

export const SignupScreen = () => {
  const { control,
    handleSubmit,
    onSignupFormSubmit } = useSignupScreen();

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
            }}>Let's Get Started!</Text>
            <Text variant="bodySmall">We just need basic information to setup your account.</Text>
          </View>

          <View style={{
            marginVertical: 50,
            gap: 8
          }}>
            <TextInput control={control} name="name" label={"Your Name"} rules={{
              required: {
                value: true,
                message: "Please enter your name",
              },
            }} />

            <TextInput control={control} name="email" label={"Your Email"} rules={{
              required: {
                value: true,
                message: "Please enter your email address",
              },
            }} />

            <TextInput control={control} name="password" label={"Enter Password"} secureTextEntry rules={{
              required: {
                value: true,
                message: "Password is required",
              },
            }} />

            <TextInput control={control} name="rePassword" label={"Re-enter Password"} secureTextEntry rules={{
              required: {
                value: true,
                message: "Please re-enter your password",
              },
            }} />
          </View>

          <View style={{
            gap: 8
          }}>
            <Button mode="contained" onPress={handleSubmit(onSignupFormSubmit)} >Register</Button>
            <Text variant="bodySmall">*Your personal information is encrypted before storing.</Text>
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
