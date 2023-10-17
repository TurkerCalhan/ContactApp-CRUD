// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBBZGl6zQgTs6CHaDuBgKfRdgrGaM732Q",
  authDomain: "vite-contact-b56a8.firebaseapp.com",
  projectId: "vite-contact-b56a8",
  storageBucket: "vite-contact-b56a8.appspot.com",
  messagingSenderId: "240376980390",
  appId: "1:240376980390:web:a501d416c3cb919f54e567",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
