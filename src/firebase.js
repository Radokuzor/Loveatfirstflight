// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBcylOTv-Qqbi6NTjNQOoxrDjSBo-wxw4",
  authDomain: "laff-43cf3.firebaseapp.com",
  projectId: "laff-43cf3",
  storageBucket: "laff-43cf3.appspot.com",
  messagingSenderId: "520332145211",
  appId: "1:520332145211:web:e39271d7ab2f2d2519e21e",
  measurementId: "G-6W5YVKZ90T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
