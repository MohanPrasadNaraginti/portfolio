// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_API_KEY,
//   authDomain: process.env.REACT_AUTH_DOMAIN,
//   projectId: process.env.REACT_PROJECT_ID,
//   storageBucket: process.env.REACT_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
//   measurementId: process.env.REACT_MEASUREMENT_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export {app, auth};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCoqicqeQp2n8fF43fiB-9fVM2lbcB934c",
//   authDomain: "portfolio-39e59.firebaseapp.com",
//   projectId: "portfolio-39e59",
//   storageBucket: "portfolio-39e59.appspot.com",
//   messagingSenderId: "610834777302",
//   appId: "1:610834777302:web:b759f6166e1cee54207577",
//   measurementId: "G-508KTF5182"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();