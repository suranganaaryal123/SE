// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj3zrq4w1svw-i35j0-ITyN2hVfWi-EBY",
  authDomain: "riddle-game-ee264.firebaseapp.com",
  projectId: "riddle-game-ee264",
  storageBucket: "riddle-game-ee264.firebasestorage.app",
  messagingSenderId: "198497248973",
  appId: "1:198497248973:web:4d63dd827240da5fc9ab84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };