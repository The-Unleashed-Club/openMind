import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, signInWithEmailAndPassword , onAuthStateChanged   } from "../firebase/firebase-utilities";
import Button_1 from "../components/button1"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";



const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const emailPosition = useSharedValue(1)
  const passwordPosition = useSharedValue(1)

  const emailAnimatedStyle = useAnimatedStyle(()=>{

    const interpolationY = interpolate(emailPosition.value,[0,1],[-40,0])
    const interpolationX = interpolate(emailPosition.value,[0,1],[-20,0])
     return{
       transform:[{translateY:withTiming(interpolationY,{duration:800})},{translateX:withTiming(interpolationX,{duration:800})}],
       opacity: (email.length > 0 && (emailPosition.value == 1))?0:1
     }
  })

  const passwordAnimatedStyle = useAnimatedStyle(()=>{
    const interpolationY = interpolate(passwordPosition.value,[0,1],[-40,0])
    const interpolationX = interpolate(passwordPosition.value,[0,1],[-18,0])
     return{
       transform:[{translateY:withTiming(interpolationY,{duration:800})},{translateX:withTiming(interpolationX,{duration:800})}],
       opacity: (password.length > 0 && (passwordPosition.value == 1))?0:1
     }
  })


  const handleSignIn = () => {


    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log("Signed Un", user);
        // navigation.navigate("CreateChat");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.messa);
        // const errorMessage = error.message;
        // ..
    });



    
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.SignInLabel}>SignIn</Text>
      </View>

      <View style={{ width: "100%" }}>
        <View style={styles.input}>
          <View style={[StyleSheet.absoluteFill, styles.labelTextContainer]}> 
          <Animated.Text style={emailAnimatedStyle} >Email</Animated.Text>
          </View>
          <TextInput
            value={email}
            onChangeText={setEmail}
            onFocus={()=>emailPosition.value =0}
            onBlur={()=>emailPosition.value =1}
          />
        </View>
        <View style={styles.input}>
        <View style={[StyleSheet.absoluteFill, styles.labelTextContainer]}> 
          <Animated.Text style={passwordAnimatedStyle} >Password</Animated.Text>
          </View>
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onFocus={()=>passwordPosition.value =0}
            onBlur={()=>passwordPosition.value =1}
          />
        </View>
      </View>

      <View style={styles.container2}>
        <Button_1 title="SignIn" onPress={handleSignIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
    backgroundColor: '#ffffff'
  },
  container1:{
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: "center",
    paddingBottom: '20%',
    bottom: '10%',
  },
  container2:{
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    top: "6%"
  },
  SignInLabel: {
    fontSize: 50,
    color: "#224957",
    fontFamily: 'OpenSans_800ExtraBold'
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding:20,
    marginBottom: 16,
    borderRadius: 12,
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    marginVertical:15,
    justifyContent:'center'
  },
  forgotPassword: {
    marginTop: 16,
    color: "#555",
    textDecorationLine: "underline",
  },
  Button: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  labelTextContainer:{
    justifyContent:'center',
    paddingLeft:20
  }
});

export default SignIn;
