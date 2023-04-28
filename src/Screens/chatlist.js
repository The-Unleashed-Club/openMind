import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { db, collection, getDocs } from "../firebase/firebase-utilities";

const ChatListScreen = ({ navigation }) => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const conversations = [];
      querySnapshot.forEach((doc) => {
        conversations.push({ id: doc.id, ...doc.data() });
        // console.log(doc.id);
      });
      setChatList(conversations);
    };
    fetchConversations();
  }, []);

  const renderItem = ({ item }) => {
    const { id, name, chatName, lastMessage } = item;

    return (
      <TouchableOpacity
        style={styles.chatContainer}
        onPress={() => navigation.navigate("choice", { id, chatName })}
      >
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.chatAvatar}
        />
        <View style={styles.chatInfo}>
          <Text style={styles.chatName}>{name}</Text>
          <Text style={styles.chatLastMessage}>{lastMessage}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "10%",
  },
  header: {
    height: 60,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatLastMessage: {
    fontSize: 14,
    color: "#999",
  },
});

export default ChatListScreen;
