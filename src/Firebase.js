// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAgkxzQrO-U5gW_HR4LKuDXyoeFJeio-k",
  authDomain: "reducer-auth.firebaseapp.com",
  projectId: "reducer-auth",
  storageBucket: "reducer-auth.appspot.com",
  messagingSenderId: "1000967907864",
  appId: "1:1000967907864:web:2b2b9df2a9e85429cf716d",
  measurementId: "G-2NY27SLP78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
