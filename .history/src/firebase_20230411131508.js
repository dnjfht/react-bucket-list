// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8nFidrw1IJkG1W-OR75jMnGsAPxAtiTQ",
  authDomain: "sparta-bucketlist-a2a14.firebaseapp.com",
  projectId: "sparta-bucketlist-a2a14",
  storageBucket: "sparta-bucketlist-a2a14.appspot.com",
  messagingSenderId: "262228219995",
  appId: "1:262228219995:web:b4af6a538e279b8dc4477e",
  measurementId: "G-1LDWQHN4N7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
