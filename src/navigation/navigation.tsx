
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth, onAuthStateChanged } from "../firebase/firebase-utilities";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../state-managment/reducers';

import LoadingScreen from '../Screens/LoadingScreen';

import { LoginScreen } from "../Screens/LoginScreen";
import { SignupScreen } from "../Screens/SignupScreen";
import { WelcomeScreen } from '../Screens/WelcomeScreen';
import CreateChat from '../Screens/createchat';
import Choice from '../Screens/choice';
import CreateImage from '../Screens/createimage';
import SocketChat from '../Screens/ChatClient';
import ChatListScreen from '../Screens/chatlist';

const Stack = createStackNavigator();

export const AuthScreens = () => {
  return <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="welcome_screen" component={WelcomeScreen} />
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="signUp" component={SignupScreen} />
  </Stack.Navigator>
}


export const AppScreens = () => {
  return <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="chatListScreen" component={ChatListScreen} />
    <Stack.Screen name="choice" component={Choice} />
    <Stack.Screen name="createChat" component={CreateChat} />
    <Stack.Screen name="createimage" component={CreateImage} />
    <Stack.Screen name="socketChat" component={SocketChat} />
  </Stack.Navigator>
}

export default function Home() {

  const dispatch = useDispatch();
  const [user, isUser] = useState(false);
  const isLoading = useSelector((state: any) => state.isLoading);

  useEffect(() => {
    const redirect = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        isUser(true);
        dispatch(setLoading(false));
      } else {
        isUser(false);
      }
    });

    return redirect;
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingScreen />
      ) : user ? (<AppScreens />) : (<AuthScreens />)}
    </NavigationContainer>
  );
}