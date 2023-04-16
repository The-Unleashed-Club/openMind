import { getApp, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBS1fCY-_I-V4WZYveOTNmx9ByGDRaCW70",
  authDomain: "pre-phrase.firebaseapp.com",
  projectId: "pre-phrase",
  storageBucket: "pre-phrase.appspot.com",
  messagingSenderId: "531222180809",
  appId: "1:531222180809:web:91c3af0b3779e82801ee18",
  measurementId: "G-1EJ9733JN2"
};

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

console.log(app);

import Home from "./src/navigation/navigation";



export default function App() {
  return <Home />
}

