
import { StyleSheet, Text, Image ,View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/login";
import SignUp from "../Screens/signUp";
import ImageScreen from '../Screens/image';
import CreateChat from '../Screens/createchat';
import Choice from '../Screens/choice';
import CreateImage from '../Screens/createimage';
const Stack = createStackNavigator();


export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="CreateChat" component={CreateChat} />
        <Stack.Screen name="Choice" component={Choice} />
        <Stack.Screen name="CreateImage" component={CreateImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}