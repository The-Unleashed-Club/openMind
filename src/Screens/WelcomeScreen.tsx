import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Button } from 'react-native-paper';

export const useWelcomeScreen = () => {
  const navigation: any = useNavigation()

  const navigateToLoginScreen = useCallback(() => {
    navigation.navigate("login");
  }, [navigation])

  const navigateToSignUpScreen = useCallback(() => {
    navigation.navigate("signUp");
  }, [navigation])

  return {
    navigateToLoginScreen,
    navigateToSignUpScreen
  }
}

export const WelcomeScreen = () => {

  const { navigateToLoginScreen, navigateToSignUpScreen } = useWelcomeScreen()

  return (
    <View style={styles.container}>

      <View style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
      }}>

        <Text style={{
          fontWeight: "800",
          fontSize: 54
        }}>Open Mind</Text>

      </View>

      <View style={{
        display: "flex",
        height: "80%",
        justifyContent: "space-between",
        gap: 24
      }}>

        <Button mode="text" onPress={navigateToSignUpScreen}>
          Let's Get Started
        </Button>

        <View style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}>
          <Text variant="bodyMedium">Already have an account?</Text>
          <Button mode="contained" onPress={navigateToLoginScreen}>
            Login
          </Button>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: "#EFF4FF",
    height: "100%",
  }
});