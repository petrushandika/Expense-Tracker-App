// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApAHpPVpfZwvKBKhbyPYIxvJ8guhlQTL8",
  authDomain: "expense-tracker-be92a.firebaseapp.com",
  projectId: "expense-tracker-be92a",
  storageBucket: "expense-tracker-be92a.appspot.com",
  messagingSenderId: "999457415106",
  appId: "1:999457415106:web:7d26feb76bc0de7889805b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
