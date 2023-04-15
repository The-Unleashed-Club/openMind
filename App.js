import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image ,View} from 'react-native';
import Login from "./Screens/login";
export default function App() {
  return (
    <View style={styles.container}>

      {/* <Text>Open up App.js to start working on your app!</Text>
      <Image
        style={{ width: "100%" }}
        resizeMode="contain"
        source={require("./assets/chat1.png")}
      />
      <StatusBar style="auto" /> */}
      <Login />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
