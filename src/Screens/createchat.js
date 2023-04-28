import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  Text,
  View,
} from "react-native";
import { Response_Item , Button_1 , colors } from "../components/export";
import { db, collection, addDoc, doc, getDocs } from "../firebase/firebase-utilities";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'How Can i help you today?',
  },

];


const CreateChat = props => {

  const [inputText, setInputText] = useState("");
  const [responseRecieve, setresponseRecieve] = useState(false);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleChatSubmit = async () => {

    setresponseRecieve(true);
    
    if (inputText === "") {
      setresponseRecieve(false);
      return;
    }
    const stringID = Math.random().toString(36).substring(2,7);


    // const querySnapshot = await getDocs(collection(db, "conversation"));
    
    // querySnapshot.forEach((doc) => {
    //   setResponseText(responseText + doc.data().message)
    //   console.log(doc.id, " => ", doc.data().message);
    // });

    // DATA.unshift(
    //   {
    //     id: stringID,
    //     title: inputText
    //   });
   

    try {
      const response = await fetch(
        "https://openai80.p.rapidapi.com/chat/completions",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "525dd849e4msh114d97f8b5be502p15edc0jsn0846420c16a0",
            "X-RapidAPI-Host": "openai80.p.rapidapi.com",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputText }],
          }),
        }
      );
      const json = await response.json();
      if (
        json.choices &&
        json.choices.length > 0 &&
        json.choices[0].message &&
        json.choices[0].message.content
      ) {
        DATA.unshift(
          {
            id: stringID,
            title: json.choices[0].message.content
          });
        setresponseRecieve(false)

        // /////// Updating Collection ////////
        //   try {
        //     const docRef = await addDoc(collection(db, "conversation"), {
        //       first: "Alan",
        //       last: "Mathison",
        //       message: inputText
        //     });

        //     console.log("Document written with ID: ", docRef.id);
        //   } catch (e) {
        //     console.error("Error adding document: ", e);
        //   }
        // ///// Updating Collection ////////
   
      } else {
        console.error("Invalid response format:", json);
      }
    } catch (error) {
      console.error(error);
    }

    // console.log(DATA);
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1} >
          <FlatList
              data={DATA}
              renderItem={({item}) => <Response_Item title={item.title} />}
              keyExtractor={item => item.id}
            />
      </View>

        {responseRecieve == true ? (
          <ActivityIndicator size="large" color="#20DF7F" />
        ) : (
          <View style={styles.container2}>
            <TextInput
              style={styles.input}
              onChangeText={handleInputChange}
              value={inputText}
              placeholder="Enter a message"
              placeholderTextColor={"#ffffff"}
            />

            <View style={styles.container3}>
              <Button_1 title="Sent" onPress={handleChatSubmit} />
            </View>
            
        </View>
        )}
       {/* {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />} */}
        
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "3.5%",
    paddingTop: "12%",
    backgroundColor: colors.backgroundColor,
  },
  container1: {
    width: "100%",
    height: "70%",
    // backgroundColor: colors.test2

  },
  container2: {
    width: "100%",
    paddingBottom: '15%',
    // backgroundColor: colors.test5
  },
  container3: {
    width: "100%",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: colors.darkGrey,
    fontSize: 18,
    color: colors.white,
  },
  responseText: {
    paddingHorizontal: "8%",
    fontSize: 18,
    color: colors.darkGrey,
  },
});

export default CreateChat;
