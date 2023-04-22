// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8oBQ_fcJWIxPbVqffzkKpBBIiH3eKetg",
  authDomain: "crwn-prjt.firebaseapp.com",
  projectId: "crwn-prjt",
  storageBucket: "crwn-prjt.appspot.com",
  messagingSenderId: "543023069653",
  appId: "1:543023069653:web:fc4a842c7bd0d8d7fc255c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
