import React, { useCallback } from "react";
import { View, StyleSheet, Alert, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../firebase/firebase-utilities";
import { setLoading } from "../state-managment/reducers";
import { useDispatch } from "react-redux";
import { db, collection, addDoc } from "../firebase/firebase-utilities";
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

  const onSignupFormSubmit: SubmitHandler<SignupFormData> = useCallback((data) => {
    const { name, email, password, rePassword } = data;

    if (password !== rePassword) {
      Alert.alert("Password Do not match, please try again");
    } else {
      dispatch(setLoading(true));
      try {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            const docRef = await addDoc(collection(db, "users"), {
              name: name,
              email: email,
              password: password,
            });
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      } catch (error) {
        console.error("Error", error);
        dispatch(setLoading(false));
      }
    }
  }, [])

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

            <TextInput control={control} name="password" label={"Enter Password"} rules={{
              required: {
                value: true,
                message: "Password is required",
              },
            }} />

            <TextInput control={control} name="rePassword" label={"Re-enter Password"} rules={{
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
  },
  container1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "10%",
  },
  container2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: "5%",
  },
  Button: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
