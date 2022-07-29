// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3zJt3iyizNubMz2fueP76czn9HkQkZls",
  authDomain: "coderhouse-react-a6886.firebaseapp.com",
  projectId: "coderhouse-react-a6886",
  storageBucket: "coderhouse-react-a6886.appspot.com",
  messagingSenderId: "857524384643",
  appId: "1:857524384643:web:cdf2a9156ac3bef699bcb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)
export const db = getFirestore(app);