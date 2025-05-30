// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApAHpPVpfZwvKBKhbyPYIxvJ8guhlQTL8",
  authDomain: "expense-tracker-be92a.firebaseapp.com",
  projectId: "expense-tracker-be92a",
  storageBucket: "expense-tracker-be92a.firebasestorage.app",
  messagingSenderId: "999457415106",
  appId: "1:999457415106:web:7d26feb76bc0de7889805b",
  //   measurementId: "G-YSDST038TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// DB
export const firestore = getFirestore(app);
