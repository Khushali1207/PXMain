// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBS82KOkzYxwktN20IiCQV8LCv2Uaa3xsA",
//   authDomain: "px-printx.firebaseapp.com",
//   projectId: "px-printx",
//   storageBucket: "px-printx.firebasestorage.app",
//   messagingSenderId: "201481773798",
//   appId: "1:201481773798:web:f8f14bd725f573bc0c5127",
//   measurementId: "G-M3NF8BWTCE"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);


import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS82KOkzYxwktN20IiCQV8LCv2Uaa3xsA",
  authDomain: "px-printx.firebaseapp.com",
  projectId: "px-printx",
  storageBucket: "px-printx.appspot.com",
  messagingSenderId: "201481773798",
  appId: "1:201481773798:web:f8f14bd725f573bc0c5127",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithRedirect(auth, googleProvider);

export const handleRedirectResult = () =>
  getRedirectResult(auth);
