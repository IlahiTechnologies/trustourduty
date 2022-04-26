// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6iNdRx9Sv1WVscQ-N7Ai44pnxucUWVic",
  authDomain: "trustourduty-4ecc2.firebaseapp.com",
  projectId: "trustourduty-4ecc2",
  storageBucket: "trustourduty-4ecc2.appspot.com",
  messagingSenderId: "155977083983",
  appId: "1:155977083983:web:b05d94626c7d59e4114e3a",
  measurementId: "G-3DXEWPZ1C0"
};



export const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
// const analytics = getAnalytics(app);
// const db = app.firestore();
console.log(process.env.apiKey, "kaka........");
export const auth = firebase.auth();
console.log(process.env.apiKey, "paka........");
const db = getFirestore(app);

export { firebase,db };