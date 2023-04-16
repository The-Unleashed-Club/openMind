
import { StyleSheet, Text, Image ,View} from 'react-native';
import Login from "./src/Screens/login";
import ImageScreen from './src/Screens/image';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS1fCY-_I-V4WZYveOTNmx9ByGDRaCW70",
  authDomain: "pre-phrase.firebaseapp.com",
  projectId: "pre-phrase",
  storageBucket: "pre-phrase.appspot.com",
  messagingSenderId: "531222180809",
  appId: "1:531222180809:web:91c3af0b3779e82801ee18",
  measurementId: "G-1EJ9733JN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import Home from "./src/navigation/navigation";



export default function App() {
  return <Home />
}

