 import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
} from "react-native";

const CreateChat = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleChatSubmit = async () => {
    if (inputText === "") {
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "673f8f817cmsh332d89277fd83b7p1e7383jsnd9d06adb3202",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: inputText }],
      }),
    };

    try {
      const response = await fetch(
        "https://openai80.p.rapidapi.com/chat/completions",
        options
      );
      const json = await response.json();
      if (
        json.choices &&
        json.choices.length > 0 &&
        json.choices[0].message &&
        json.choices[0].message.content
      ) {
        setResponseText(json.choices[0].message.content);
      } else {
        console.error("Invalid response format:", json);
      }
    } catch (error) {
      console.error(error);
    }

    setInputText("");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputText}
          placeholder="Enter a message"
        />
        <Button title="Submit" onPress={handleChatSubmit} />
        {responseText !== "" && (
          <Text style={styles.responseText}>Response: {responseText}</Text>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    width: "100%",
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  responseText: {
    margin: 15,
  },
});

export default CreateChat;