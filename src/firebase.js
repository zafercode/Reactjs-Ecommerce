// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNXa1zE3wq63uHeG_ZgGGY37FNa5C-N50",
  authDomain: "reactjs-ecommerce-app-e66b5.firebaseapp.com",
  projectId: "reactjs-ecommerce-app-e66b5",
  storageBucket: "reactjs-ecommerce-app-e66b5.appspot.com",
  messagingSenderId: "188630765816",
  appId: "1:188630765816:web:da11badafe7a67091deb0d",
  measurementId: "G-R3VWPR8CVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = getAnalytics(app);

const db = firebaseApp.firestore();

export default db