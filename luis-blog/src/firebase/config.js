// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqPU3fnIA5TndYHSwMf6K7XEqNxebprmA",
  authDomain: "blog-4480a.firebaseapp.com",
  projectId: "blog-4480a",
  storageBucket: "blog-4480a.appspot.com",
  messagingSenderId: "1045189923798",
  appId: "1:1045189923798:web:9682354570b8b113af8a77",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
