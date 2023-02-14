// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCetL5Fxn_oSJtlvXBxSwWgfFlrOy6ueo",
  authDomain: "quila-9d657.firebaseapp.com",
  projectId: "quila-9d657",
  storageBucket: "quila-9d657.appspot.com",
  messagingSenderId: "747560582062",
  appId: "1:747560582062:web:818960a17c37e50f57263f",
  measurementId: "G-MVFNBHYX0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const mant = getFirestore(app)