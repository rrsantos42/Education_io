// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1i0zpYvuQF5vzbk4X9ouPs5TpDBdg7Bg",
    authDomain: "test-api-dd92a.firebaseapp.com",
    databaseURL: "https://test-api-dd92a-default-rtdb.firebaseio.com",
    projectId: "test-api-dd92a",
    storageBucket: "test-api-dd92a.appspot.com",
    messagingSenderId: "37064074435",
    appId: "1:37064074435:web:095163d5dd9788591aae76",
    measurementId: "G-7TTL8LFH5L"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


