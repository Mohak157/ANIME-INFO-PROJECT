
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNcXCxWk4JdHwbwInJnkEeSU7WPeN7RQQ",
  authDomain: "anime-info-62cff.firebaseapp.com",
  projectId: "anime-info-62cff",
  storageBucket: "anime-info-62cff.firebasestorage.app",
  messagingSenderId: "753546754266",
  appId: "1:753546754266:web:92d4a7f8438f1f36c1cde3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
