// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_NETLIX ,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_FIREBAE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyD1r71JTGvGoMlZq9poBAFzRSex85gz_kk",
  authDomain: "linkedinclone-d3b93.firebaseapp.com",
  projectId: "linkedinclone-d3b93",
  storageBucket: "linkedinclone-d3b93.appspot.com",
  messagingSenderId: "97579593462",
  appId: "1:97579593462:web:ff02645ffb1193aabf86d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);