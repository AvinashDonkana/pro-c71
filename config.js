import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDUoreTaoPHoKrJZpIbiiLIOWJAr78iRH4",
    authDomain: "e-ride-app-56954.firebaseapp.com",
    projectId: "e-ride-app-56954",
    storageBucket: "e-ride-app-56954.appspot.com",
    messagingSenderId: "1085594931857",
    appId: "1:1085594931857:web:fc8d54fe5b017784dde530"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
