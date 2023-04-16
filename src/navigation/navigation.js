
import { StyleSheet, Text, Image ,View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/login";
import SignUp from "../Screens/signUp";
import ImageScreen from '../Screens/image';
import CreateChat from '../Screens/createchat';

const Stack = createStackNavigator();


export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="CreateChat" component={CreateChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}