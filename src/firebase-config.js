// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB1sZdWFQr2GQpbuRd-9rhTXZo4RcLlW-Y",
  authDomain: "chat113.firebaseapp.com",
  projectId: "chat113",
  storageBucket: "chat113.appspot.com",
  messagingSenderId: "261371457314",
  appId: "1:261371457314:web:aefebabcb4e54c9814bf7b",
  measurementId: "G-KWJSWQRNV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();