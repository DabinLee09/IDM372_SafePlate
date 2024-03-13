// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, onAuthStateChanged} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY5Iis2Dk-j9LhQEfvkt1yoVv2iT-wLnw",
  authDomain: "safeplatev3.firebaseapp.com",
  projectId: "safeplatev3",
  storageBucket: "safeplatev3.appspot.com",
  messagingSenderId: "29231305648",
  appId: "1:29231305648:web:dd3d88ae925f2f4729fc75"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);