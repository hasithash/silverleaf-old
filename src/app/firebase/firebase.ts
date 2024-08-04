import { initializeApp } from "firebase/app";

import { getAnalytics,Analytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyClrHhsSoFNMgPD4GnnyxPjnQE8p1cRw1Q",

  authDomain: "yoursilverleaf.firebaseapp.com",

  projectId: "yoursilverleaf",

  storageBucket: "yoursilverleaf.appspot.com",

  messagingSenderId: "979063356755",

  appId: "1:979063356755:web:ca64baf026f2ca6481f5a6",

  measurementId: "G-2SMRNMGFF3"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth:Auth = getAuth(app);