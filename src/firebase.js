// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTs4GCMgcLWgBwUxcukSxnn9ZHuhkIXpg",
  authDomain: "cos30043-vue-project.firebaseapp.com",
  projectId: "cos30043-vue-project",
  storageBucket: "cos30043-vue-project.appspot.com",
  messagingSenderId: "222026315023",
  appId: "1:222026315023:web:4671f04dd4cfa1773b3a7a",
  measurementId: "G-6MHHP05HF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;