// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: 'catbytes-frontend.firebaseapp.com',
  projectId: 'catbytes-frontend',
  storageBucket: 'catbytes-frontend.firebasestorage.app',
  messagingSenderId: '221712767543',
  appId: '1:221712767543:web:b0b18f7d4e3af02c3ebdb2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { app, auth };
