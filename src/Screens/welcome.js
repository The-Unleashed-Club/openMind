import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button_1 from "../components/button1";

const Welcome_screen = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/illus2.jpg")}
      />
      <View style={{width: '100%'}}>
        <View style={styles.container1} >   
          <Button_1 
            onPress={ () => navigation.navigate("login")}
            title={'Login'} 
          />
        </View>
        <View style={styles.container1} >   
          <Button_1
             onPress={ () => navigation.navigate("signUp")}
            title={'signUp'} 
          />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#ffffff'
  },
  container1:{
    width: '100%',
    paddingTop: '5%',
    paddingHorizontal: '10%'
  },
  image: {
    width: "90%",
    height: "40%",
  },
});

export default Welcome_screen;
