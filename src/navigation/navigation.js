
import { StyleSheet, Text, Image ,View} from 'react-native';
import Login from "../Screens/login";
import ImageScreen from '../Screens/image';
import CreateChat from '../Screens/createchat';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CreateChat" component={CreateChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}