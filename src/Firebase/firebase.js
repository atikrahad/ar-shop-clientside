// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0YREJMbcQdl-e6bQp4OBpzcvbNlOehLo",
  authDomain: "brand-products-26027.firebaseapp.com",
  projectId: "brand-products-26027",
  storageBucket: "brand-products-26027.appspot.com",
  messagingSenderId: "58961562443",
  appId: "1:58961562443:web:cd1d8cb979d1a2244c76ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)