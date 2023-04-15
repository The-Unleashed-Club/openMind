
import { StyleSheet, Text, Image ,View} from 'react-native';
import Login from "./src/Screens/login";
import ImageScreen from './src/Screens/image';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/navigation/navigation";



export default function App() {
  return <Home />
}

