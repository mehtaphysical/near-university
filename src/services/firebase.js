import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCGfH340oGdkcC5MWclhe_PuhtT17HnCEo",
  authDomain: "near-university.firebaseapp.com",
  projectId: "near-university",
  storageBucket: "near-university.appspot.com",
  messagingSenderId: "421712672747",
  appId: "1:421712672747:web:f4a5fae656967977fd0bae",
  measurementId: "G-Y1KSFZ1MDR",
});

export const db = firebase.firestore();
export const coursesCollection = db.collection("courses");
