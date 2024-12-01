import style from './CreateApplicationPage.module.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import * as dotenv from 'dotenv';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'catbytes-frontend.firebaseapp.com',
  projectId: 'catbytes-frontend',
  storageBucket: 'catbytes-frontend.firebasestorage.app',
  messagingSenderId: '221712767543',
  appId: '1:221712767543:web:b0b18f7d4e3af02c3ebdb2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ??
async function getCities(): Promise<any[]> {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

// ??
getCities().then((cities) => console.log(cities));

export function CreateApplicationPage() {
  return <div className={style.main}>CreateApplicationPage</div>;
}
