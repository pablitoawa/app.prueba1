// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDigTt81LaofgPqko4kp_xSRg37WYorySs",
  authDomain: "lia1-f18fa.firebaseapp.com",
  databaseURL: "https://lia1-f18fa-default-rtdb.firebaseio.com",
  projectId: "lia1-f18fa",
  storageBucket: "lia1-f18fa.appspot.com",
  messagingSenderId: "346593488921",
  appId: "1:346593488921:web:fdcd116df7c969a874fa88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getDatabase(app)