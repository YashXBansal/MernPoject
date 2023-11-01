// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b4236.firebaseapp.com",
  projectId: "mern-estate-b4236",
  storageBucket: "mern-estate-b4236.appspot.com",
  messagingSenderId: "380804757349",
  appId: "1:380804757349:web:a3e4e9c9b614348217d38c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);