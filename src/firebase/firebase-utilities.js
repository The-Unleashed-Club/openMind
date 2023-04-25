import { getApp, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged  } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, addDoc , setDoc , doc , getDoc , getDocs } from "firebase/firestore";
import firebaseConfig from "../firebase/firebaseConfig";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export  {
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