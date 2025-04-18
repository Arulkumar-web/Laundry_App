// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSTtaVfl4woeclICnNqqCeH731H5NTW8w",
    authDomain: "laundry-app-f7a7c.firebaseapp.com",
    projectId: "laundry-app-f7a7c",
    storageBucket: "laundry-app-f7a7c.firebasestorage.app",
    messagingSenderId: "928083709679",
    appId: "1:928083709679:web:000c0fd0001fa1e777551a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();
export {auth,db}

