import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHQtj_f8k0n6YRQj7aixbMd1ljpA_whjk",
  authDomain: "e-com-9d978.firebaseapp.com",
  projectId: "e-com-9d978",
  storageBucket: "e-com-9d978.appspot.com",
  messagingSenderId: "889745348266",
  appId: "1:889745348266:web:ef439f02542c9c8e5022d3",
  measurementId: "G-G83MS4MSYW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = getAuth();