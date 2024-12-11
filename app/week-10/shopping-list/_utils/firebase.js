import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjxhLcfsthNKsdZGBh_2tFpu1YZ5ZsqHk",
  authDomain: "week-8-32e93.firebaseapp.com",
  projectId: "week-8-32e93",
  storageBucket: "week-8-32e93.firebasestorage.app",
  messagingSenderId: "487862473187",
  appId: "1:487862473187:web:118e5b4302465d435bd0d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);