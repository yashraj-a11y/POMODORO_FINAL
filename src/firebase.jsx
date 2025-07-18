// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxveUGlvDzpHDG2p7YrwTqAnh5X7LB2Uo",
  authDomain: "pomodoro-fc7ef.firebaseapp.com",
  projectId: "pomodoro-fc7ef",
  storageBucket: "pomodoro-fc7ef.firebasestorage.app",
  messagingSenderId: "404069871439",
  appId: "1:404069871439:web:62507aba4f54e7ca0d1f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);