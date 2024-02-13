import React from "react";
import { View, StyleSheet, Image } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/load2.gif")}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#000000'
  },
  image: {
    width: "90%",
    height: "40%",
  },
});

export default LoadingScreen;
