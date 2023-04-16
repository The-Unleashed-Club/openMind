
import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/chat1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 900,
    resizeMode: "cover",
  },
});

export default ImageScreen;
