// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI3kfh0KKtzUOl9UgDmxpSmmVELKUYapY",
  authDomain: "crud-8bd24.firebaseapp.com",
  projectId: "crud-8bd24",
  storageBucket: "crud-8bd24.appspot.com",
  messagingSenderId: "813680033195",
  appId: "1:813680033195:web:1e1d3cc706b11ac185a6ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const userAuth=getAuth(app)
