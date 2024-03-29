// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_URL,
  authDomain: "mern-blog-5a0ff.firebaseapp.com",
  projectId: "mern-blog-5a0ff",
  storageBucket: "mern-blog-5a0ff.appspot.com",
  messagingSenderId: "122522676814",
  appId: "1:122522676814:web:2d73016d89c72740bb9d1f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
