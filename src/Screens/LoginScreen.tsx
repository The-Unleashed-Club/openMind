import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { auth, signInWithEmailAndPassword } from "../firebase-utilities";
import { setLoading, setUser } from "../state-managment/reducers";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { TextInput } from "@/components/input/TextInput";
import { Button } from "react-native-paper";

type LoginFormData = {
  email: string;
  password: string;
};

export const useLoginScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginFormSubmit: SubmitHandler<LoginFormData> = useCallback(
    async (data) => {
      setError(null);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        dispatch(setUser(userCredential.user));
      } catch (error: any) {
        console.error(error.message);
        if (error.code) {
          switch (error.code) {
            case "auth/invalid-email":
              setError("The email address is badly formatted.");
              break;
            case "auth/wrong-password":
              setError("Wrong password. Please try again.");
              break;
            case "auth/user-not-found":
              setError("No user found with this email.");
              break;
            default:
              setError("An unexpected error occurred. Please try again.");
              break;
          }
        } else {
          setError("A network error occurred. Please try again later.");
        }
      }
    },
    [dispatch]
  );

  return {
    control,
    handleSubmit,
    onLoginFormSubmit,
    error,
  };
};

export const LoginScreen = () => {
  const { control, handleSubmit, onLoginFormSubmit, error } = useLoginScreen();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>
              Welcome Back!
            </Text>
            <Text>We're glad to see you back.</Text>
          </View>
          <View style={{ marginVertical: 50, gap: 8 }}>
            <TextInput
              control={control}
              name="email"
              label={"Your Email"}
              rules={{
                required: {
                  value: true,
                  message: "Please enter your email address",
                },
              }}
            />
            <TextInput
              secureTextEntry
              control={control}
              name="password"
              label={"Your Password"}
              rules={{
                required: {
                  value: true,
                  message: "Please enter your password",
                },
              }}
            />
            {error && (
              <Text style={{ color: "red", marginVertical: 8 }}>{error}</Text>
            )}
          </View>

          <View style={{ gap: 8 }}>
            <Button mode="contained" onPress={handleSubmit(onLoginFormSubmit)}>
              Login
            </Button>
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
});
