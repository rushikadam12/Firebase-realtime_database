// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZMU1ZB3yXEyhiiwbOLVO150w6d8MfNNU",
  authDomain: "fireabase-auth-1ae6a.firebaseapp.com",
  databaseURL: "https://fireabase-auth-1ae6a-default-rtdb.firebaseio.com",
  projectId: "fireabase-auth-1ae6a",
  storageBucket: "fireabase-auth-1ae6a.appspot.com",
  messagingSenderId: "575652549274",
  appId: "1:575652549274:web:ee6c27ad58d60fb1240523",
  measurementId: "G-FF3MG13K68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);