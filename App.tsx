import { LogBox } from 'react-native';
import { getApp, initializeApp } from 'firebase/app';
import firebaseConfig from './src/firebase/firebaseConfig';
import Home from "./src/navigation/navigation";
import { Provider } from "react-redux";
import store from "./src/state-managment/store";
import LoadingScreen from '@/Screens/LoadingScreen';
import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

try {
  initializeApp(firebaseConfig);
} catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!getApp.length) {
    console.error("Firebase initialization error raised", err.stack);
  }
}

const app = initializeApp(firebaseConfig)

// LogBox.ignoreAllLogs(true)
LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen"
]);


export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // Change the primary color of the app here at just one place.
      primary: '#265CDF',
    },
  };

  // please check developer mode in navigation.js before continuing.
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </Provider>
  );
}



