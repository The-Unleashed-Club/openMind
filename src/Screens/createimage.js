import React, { useState } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import colors from '../components/colors';
import Button_1 from '../components/button1';
import { calcHeight } from '../utility/utilities-funtions';

const CreateImage = () => {
  //
  // useState
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);

  //
  // Funtion
  const generateImages = async () => {
    try {
      const response = await fetch(
        'https://openai80.p.rapidapi.com/images/generations',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key':
              '525dd849e4msh114d97f8b5be502p15edc0jsn0846420c16a0',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
          },
          body: JSON.stringify({
            prompt,
            n: 2,
            size: '1024x1024',
          }),
        }
      );
      const json = await response.json();
      setImages(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 
  // render
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          {images &&
            images.map((image, index) => (
              <View style={styles.imageContainer} key={index}>
                <Image source={{ uri: image.url }} style={styles.image} />
              </View>
            ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder='Enter a prompt for the image'
          value={prompt}
          editable={true}
          onChangeText={(text) => setPrompt(text)}
          placeholderTextColor={'#ffffff'}
        />
        <Button_1
          title='Generate Images'
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
    backgroundColor: '#F5F5F5',
    padding: 10,
  },

  innerContainer: {
    height: calcHeight(0.85),
    backgroundColor: '#F5F5F5',
    padding: 10,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: colors.darkGrey,
    fontSize: 18,
    color: colors.white,
  },

  button: {
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default CreateImage;
