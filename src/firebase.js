// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
