// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxiRPGAANJBgFgHTvuggNruTFWrJbUSQU",
    authDomain: "yogic-df15b.firebaseapp.com",
    projectId: "yogic-df15b",
    storageBucket: "yogic-df15b.appspot.com",
    messagingSenderId: "89621097489",
    appId: "1:89621097489:web:45a5e619f08ce9a140d5b0",
    measurementId: "G-MFMF4GVC6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
// const storage = getStorage(app);
export  { auth, app, firestore };