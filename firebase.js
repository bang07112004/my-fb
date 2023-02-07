// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACUktK2sqKTz32he5smnYIeeQ7IFcvh_A",
  authDomain: "my-facebook-9b227.firebaseapp.com",
  projectId: "my-facebook-9b227",
  storageBucket: "my-facebook-9b227.appspot.com",
  messagingSenderId: "946050246256",
  appId: "1:946050246256:web:45ab332082f7d4322976b5",
  measurementId: "G-BT43GC5T73",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
