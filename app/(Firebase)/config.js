import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
  signInWithPhoneNumber,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-wV0aVmr7bS91ycY4FQ1Zs4-i9bkDnzA",
  authDomain: "germansilver-7a98d.firebaseapp.com",
  projectId: "germansilver-7a98d",
  storageBucket: "germansilver-7a98d.appspot.com",
  messagingSenderId: "462252541497",
  appId: "1:462252541497:web:2a9288aba174227ef12fe8",
  measurementId: "G-BNYSJZK33C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signinGoogle = new GoogleAuthProvider(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
