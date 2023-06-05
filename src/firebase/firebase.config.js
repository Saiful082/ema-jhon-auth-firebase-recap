// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0iSbhu6nxnv-NT5nR8KzgpKpyvyMhOJQ",
  authDomain: "ema-john-auth-firebase-recap.firebaseapp.com",
  projectId: "ema-john-auth-firebase-recap",
  storageBucket: "ema-john-auth-firebase-recap.appspot.com",
  messagingSenderId: "105032302028",
  appId: "1:105032302028:web:56b0a80b6f4017e9ea7169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;