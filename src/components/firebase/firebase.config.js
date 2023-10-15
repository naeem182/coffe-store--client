
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx9I7NkYDm9xf85kl3PV8r3Sv8BVxqtGA",
    authDomain: "coffee-shop-7966f.firebaseapp.com",
    projectId: "coffee-shop-7966f",
    storageBucket: "coffee-shop-7966f.appspot.com",
    messagingSenderId: "869960012619",
    appId: "1:869960012619:web:a73ca8975836104b2e0ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
