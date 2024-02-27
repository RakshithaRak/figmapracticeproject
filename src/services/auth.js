import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm7bSdwEeiacHFRjKwrgcl-NohXjMyGXw",
  authDomain: "openingapp.firebaseapp.com",
  projectId: "openingapp",
  storageBucket: "openingapp.appspot.com",
  messagingSenderId: "993144366305",
  appId: "1:993144366305:web:f9a76f8457eec04cc4c3a0",
  measurementId: "G-E3LZT4J4TG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
