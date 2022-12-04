// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgOeNHP49ALOjW4jthfR8brWR5Qt5Wd0I",
    authDomain: "grema-learning.firebaseapp.com",
    projectId: "grema-learning",
    storageBucket: "grema-learning.appspot.com",
    messagingSenderId: "92982211228",
    appId: "1:92982211228:web:37abbcd66e25bb6f99b359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;