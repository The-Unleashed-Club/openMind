import { initializeApp, FirebaseApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import * as firebaseAuth from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

let app: FirebaseApp;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBS1fCY-_I-V4WZYveOTNmx9ByGDRaCW70",
  authDomain: "pre-phrase.firebaseapp.com",
  databaseURL: "https://pre-phrase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pre-phrase",
  storageBucket: "pre-phrase.appspot.com",
  messagingSenderId: "531222180809",
  appId: "1:531222180809:web:91c3af0b3779e82801ee18",
  measurementId: "G-1EJ9733JN2"
};

app = initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app, {
  persistence: reactNativePersistence(ReactNativeAsyncStorage),
});
auth.languageCode = "en";

const db = getFirestore(app);

export {
  auth,
  db,
  getDoc,
  getDocs,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  collection,
  addDoc,
  setDoc,
  doc
}