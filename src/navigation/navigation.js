
import React , { useState , useEffect , useContext } from 'react';
import { StyleSheet, Text, Image ,View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth , onAuthStateChanged   } from "../firebase/firebase-utilities";

import Login from "../Screens/login";
import SignUp from "../Screens/signUp";
import ImageScreen from '../Screens/image';
import CreateChat from '../Screens/createchat';
import Choice from '../Screens/choice';
import CreateImage from '../Screens/createimage';




const Stack = createStackNavigator();


 function AuthScreens() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
      </Stack.Navigator>

  );
 }

 function AppScreens() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="choice" component={Choice} />
        <Stack.Screen name="createChat" component={CreateChat} />
        <Stack.Screen name="createimage" component={CreateImage} />

      </Stack.Navigator>

  );
 }



export default function Home() {

  const [ user, setUser ] = useState(false);

  useEffect(() => {
        
      const redirect = onAuthStateChanged(auth, (user) => {
        if (user) {

          console.log( "user", user);
          setUser(true)
  
        } else {
          // User is signed out
          // ...
          setUser(false)
        }
      });

      return redirect;

}, []);


  //////  Comment Below stack for Development Mode /////
  //////  UnComment Below stack for Production Mode /////
  return (
 <NavigationContainer>
       { user == true ? <AppScreens /> : <AuthScreens />}
   </NavigationContainer>
   );

  

    ///  {/* Developent Mode  */}  ///
    ///  {/* UnComment below Stack for App */}  ///
  return (
    <NavigationContainer>
       <AppScreens />
    </NavigationContainer>
  );
}