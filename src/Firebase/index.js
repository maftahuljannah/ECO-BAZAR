// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpGoLJlenA7cbRW5oPtChWcAK_T87NcNI",
  authDomain: "ecobazar-e9.firebaseapp.com",
  projectId: "ecobazar-e9",
  storageBucket: "ecobazar-e9.firebasestorage.app",
  messagingSenderId: "302937231988",
  appId: "1:302937231988:web:d94fc80e01431700b2b721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Google Auth Provider with "select account" prompt
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export { auth, googleProvider };
export default app;
