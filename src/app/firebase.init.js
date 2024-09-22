// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqI3DdZ9PRmEBpQ73XSlmEawSn8JJx8Ew",
  authDomain: "book-listenin.firebaseapp.com",
  projectId: "book-listenin",
  storageBucket: "book-listenin.appspot.com",
  messagingSenderId: "362485493708",
  appId: "1:362485493708:web:b9b383a3f89779bb3ef769",
  measurementId: "G-9LPTQGEVSX",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
