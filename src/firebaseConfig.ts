// Import the functions you need from the SDKs you need
<<<<<<< HEAD:src/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
=======
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
>>>>>>> cd0cd85 (log in application):firebaseConfig.ts

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
<<<<<<< HEAD:src/firebaseConfig.ts
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey: "AIzaSyDz7KWPpsKDMwnh0Ho92m043xfSg9k7Kzk",
=======
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
>>>>>>> b169ac9 (completes login and forgot password feature)
  authDomain: "catbytes-frontend.firebaseapp.com",
  projectId: "catbytes-frontend",
  storageBucket: "catbytes-frontend.firebasestorage.app",
  messagingSenderId: "221712767543",
  appId: "1:221712767543:web:b0b18f7d4e3af02c3ebdb2",
=======
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'catbytes-frontend.firebaseapp.com',
  projectId: 'catbytes-frontend',
  storageBucket: 'catbytes-frontend.firebasestorage.app',
  messagingSenderId: '221712767543',
  appId: '1:221712767543:web:b0b18f7d4e3af02c3ebdb2',
>>>>>>> cd0cd85 (log in application):firebaseConfig.ts
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
