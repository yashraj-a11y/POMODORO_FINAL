import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ Realtime DB

const firebaseConfig = {
  apiKey: "AIzaSyDxveUGlvDzpHDG2p7YrwTqAnh5X7LB2Uo",
  authDomain: "pomodoro-fc7ef.firebaseapp.com",
  databaseURL: "https://pomodoro-fc7ef-default-rtdb.europe-west1.firebasedatabase.app", // ✅ required
  projectId: "pomodoro-fc7ef",
  storageBucket: "pomodoro-fc7ef.appspot.com",
  messagingSenderId: "404069871439",
  appId: "1:404069871439:web:62507aba4f54e7ca0d1f3a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); // ✅ for Realtime DB
