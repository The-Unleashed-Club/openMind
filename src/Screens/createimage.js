import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import {
  db,
  collection,
  addDoc,
  doc,
  getDocs,
} from "../firebase/firebase-utilities";



const CreateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);

  const generateImages = async () => {


    try {
      const response = await fetch(
        "https://openai80.p.rapidapi.com/images/generations",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "525dd849e4msh114d97f8b5be502p15edc0jsn0846420c16a0",
            "X-RapidAPI-Host": "openai80.p.rapidapi.com",
          },
          body: JSON.stringify({
            prompt,
            n: 2,
            size: "1024x1024",
          }),
        }
      );
      const json = await response.json();
      setImages(json.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {images &&
          images.map((image, index) => (
            <View style={styles.imageContainer} key={index}>
              <Image source={{ uri: image.url }} style={styles.image} />
            </View>
          ))}
        <TextInput
          style={styles.input}
          placeholder="Enter a prompt for the image"
          value={prompt}
          onChangeText={setPrompt}
        />
        <Button
          title="Generate Images"
          onPress={generateImages}
          style={styles.button}
        />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#FFF",
  },
  button: {
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default CreateImage;














