// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtDd66l55K62R0_swWvw3yLVTrTDLn6wg",
  authDomain: "filmsafi-1a4e2.firebaseapp.com",
  projectId: "filmsafi-1a4e2",
  storageBucket: "filmsafi-1a4e2.firebasestorage.app",
  messagingSenderId: "521528829523",
  appId: "1:521528829523:web:5e9ef95ad76b9aea5048a6",
  measurementId: "G-72LC67SQKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);