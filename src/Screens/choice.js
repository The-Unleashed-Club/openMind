import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button_1 from "../components/button1";
import { db, collection, addDoc  } from "../firebase/firebase-utilities";

const Choice = () => {
  const navigation = useNavigation();

  const handleChatSubmit = async () => {

    // /////// Making Collection ////////
    //  try {
    //     const docRef = await addDoc(collection(db, "conversation"), {
    //       first: "Aapka Naam",
    //       inputText: "",
    //       message: "Hi"
    //     });

    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // /////// Making Collection ////////

    navigation.navigate("createChat")
  }


  const handleImageSubmit = async () => {


  //  ///collection for images///
  //   try {
  //     const docRef = await addDoc(collection(db, "images"), {
  //       image: "url_to_image",
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  //  ///collection for images///

   navigation.navigate("createimage");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/aibot_one.png")}
      />
      <View style={{ width: "100%" }}>
        <View style={styles.container1}>
          <Button_1 onPress={handleChatSubmit} title={"Text"} />
        </View>
        <View style={styles.container1}>
          <Button_1 onPress={handleImageSubmit} title={"Image"} />
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
    width: "100%",
    height: "50%",
  },
});

export default Choice;
