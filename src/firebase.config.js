// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5gpz4uCaDn1iAUuyvK8CZx-xE54cakgM",
    authDomain: "house-marketplace-app-ea14e.firebaseapp.com",
    projectId: "house-marketplace-app-ea14e",
    storageBucket: "house-marketplace-app-ea14e.appspot.com",
    messagingSenderId: "915363553332",
    appId: "1:915363553332:web:369d06f63b48bf82686a61"
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()