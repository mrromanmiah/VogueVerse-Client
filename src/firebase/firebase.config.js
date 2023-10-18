// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBqf6_6sR2DoX4yEZb_YfvH1_ixStn78M",
    authDomain: "vogue-verse.firebaseapp.com",
    projectId: "vogue-verse",
    storageBucket: "vogue-verse.appspot.com",
    messagingSenderId: "673799229269",
    appId: "1:673799229269:web:e5b11052a506d6d8a829dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
