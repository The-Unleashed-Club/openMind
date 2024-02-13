import { LogBox } from 'react-native';
import { getApp, initializeApp } from 'firebase/app';
import firebaseConfig from './src/firebase/firebaseConfig';
import Home from "./src/navigation/navigation";
import { Provider } from "react-redux";
import store from "./src/state-managment/store";
import LoadingScreen from '@/Screens/LoadingScreen';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
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

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light_Italic,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold_Italic,
  });

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // Change the primary color of the app here at just one place.
      primary: '#265CDF',
    },
  };

  if (!fontsLoaded) {
    return < LoadingScreen />;
  } else {

    // please check developer mode in navigation.js before continuing.
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Home />
        </PaperProvider>
      </Provider>
    );
  }

}



