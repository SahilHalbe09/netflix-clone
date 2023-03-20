// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCm7Fu-slVF5da8-8zgG8hNUaNb-UkBR3A",
	authDomain: "netflix-clone-10cdf.firebaseapp.com",
	projectId: "netflix-clone-10cdf",
	storageBucket: "netflix-clone-10cdf.appspot.com",
	messagingSenderId: "80746707486",
	appId: "1:80746707486:web:e40bbafb4faca789cf4c0f",
	measurementId: "G-HNQ1H60YLG",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

// const analytics = getAnalytics(app);

export default app;
export { auth, db };
