// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiN-XgH52vq5hgc4lY8RHO38frfqtQ2N4",
  authDomain: "drag-db-21358.firebaseapp.com",
  databaseURL: "https://drag-db-21358-default-rtdb.firebaseio.com",
  projectId: "drag-db-21358",
  storageBucket: "drag-db-21358.firebasestorage.app",
  messagingSenderId: "817661422625",
  appId: "1:817661422625:web:5c49606002cb8661968760",
  measurementId: "G-0YETG35NZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
