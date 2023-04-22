import { getApp, initializeApp } from 'firebase/app';
import firebaseConfig from './src/firebase/firebaseConfig';
import Home from "./src/navigation/navigation";

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


export default function App() {
  return <Home />
}

