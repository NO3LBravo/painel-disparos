import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPGjfTNggD8DVXU2bcyeg5Q4Nk05XCdiA",
  authDomain: "gerenciamento-disparos.firebaseapp.com",
  projectId: "gerenciamento-disparos",
  storageBucket: "gerenciamento-disparos.firebasestorage.app",
  messagingSenderId: "715509880048",
  appId: "1:715509880048:web:b2b6b55d06df79cf06de35",
  measurementId: "G-1CPK8TDWY5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);