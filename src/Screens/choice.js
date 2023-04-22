import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button_1 from "../components/button1";
import { db, collection, addDoc  } from "../firebase/firebase-utilities";

const Choice = () => {
  const navigation = useNavigation();

  const handleChatSubmit = async () => {

    /////// Making Collection ////////
     try {
        const docRef = await addDoc(collection(db, "conversation"), {
          first: "Aapka Naam",
          inputText: "",
          message: "Hi"
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    /////// Making Collection ////////

    navigation.navigate("createChat")
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/choice.jpg")}
      />
      <View style={{ width: "100%" }}>
        <View style={styles.container1}>
          <Button_1
            onPress={handleChatSubmit }
            title={"Text"}
          />
        </View>
        <View style={styles.container1}>
          <Button_1
            onPress={() => navigation.navigate("createimage")}
            title={"Image"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container1: {
    width: "100%",
    paddingTop: "5%",
    paddingHorizontal: "10%",
  },
  image: {
    width: "90%",
    height: "40%",
  },
});

export default Choice;
