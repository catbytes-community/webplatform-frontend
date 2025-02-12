// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig_dev = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "catbytes-frontend.firebaseapp.com",
  projectId: "catbytes-frontend",
  storageBucket: "catbytes-frontend.firebasestorage.app",
  messagingSenderId: "221712767543",
  appId: "1:221712767543:web:b0b18f7d4e3af02c3ebdb2",
};

const firebaseConfig_prod = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_PROD,
  authDomain: "catbytes-frontend-prod.firebaseapp.com",
  projectId: "catbytes-frontend-prod",
  storageBucket: "catbytes-frontend-prod.firebasestorage.app",
  messagingSenderId: "2716858011",
  appId: "1:2716858011:web:af6374e3a74141cd05783e",
};

const firebaseConfig =
  import.meta.env.VITE_ENV === "dev" ? firebaseConfig_dev : firebaseConfig_prod;

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
