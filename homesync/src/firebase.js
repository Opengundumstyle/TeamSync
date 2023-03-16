import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBWktGfi7cX4skAfeI6W9yhFNMxz_NyRM",
  authDomain: "teamsync-52949.firebaseapp.com",
  projectId: "teamsync-52949",
  storageBucket: "teamsync-52949.appspot.com",
  messagingSenderId: "1012590802151",
  appId: "1:1012590802151:web:33378743a793311a055e42"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();


export {provider};
export default db;