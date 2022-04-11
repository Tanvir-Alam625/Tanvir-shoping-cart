// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLsBf3u7KGJVUyuYx70LXurppgWzsfqv8",
  authDomain: "emma-john-shop-c9202.firebaseapp.com",
  projectId: "emma-john-shop-c9202",
  storageBucket: "emma-john-shop-c9202.appspot.com",
  messagingSenderId: "48378046088",
  appId: "1:48378046088:web:bd29c77bd4e3eb75eae13d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
