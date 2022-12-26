// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2k-5PmGq_u2XZEf9DcRbnxX2S6FhMSsk",
  authDomain: "learnwithrumon.firebaseapp.com",
  projectId: "learnwithrumon",
  storageBucket: "learnwithrumon.appspot.com",
  messagingSenderId: "314388553216",
  appId: "1:314388553216:web:a78efe3815a715753202e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;