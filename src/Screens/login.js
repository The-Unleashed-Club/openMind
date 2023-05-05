import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, signInWithEmailAndPassword , onAuthStateChanged   } from "../firebase/firebase-utilities";
import Button_1 from "../components/button1"



const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

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

      <View style={{width: '100%'}} >
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#ffffff'}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#ffffff'}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
      </View>

      <View style={styles.container2} >
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#224957",
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    color: "#ffffff",
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
});

export default SignIn;
