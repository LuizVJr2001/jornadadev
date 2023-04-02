
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAZa2p2HAHEmMx_gNOP3Lw3J7prFTtYT1o",
  authDomain: "tiktok---jornada-dev---ebac.firebaseapp.com",
  projectId: "tiktok---jornada-dev---ebac",
  storageBucket: "tiktok---jornada-dev---ebac.appspot.com",
  messagingSenderId: "382505096333",
  appId: "1:382505096333:web:1a77ea33741cad4c62fec4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;