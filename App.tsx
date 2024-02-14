import "react-native-gesture-handler";
import { LogBox } from 'react-native';
import Home from "./src/navigation/navigation";
import { Provider } from "react-redux";
import store from "./src/state-managment/store";
import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

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



