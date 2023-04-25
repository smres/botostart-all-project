import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBQzQCwpfQxrMxIoev5LzEvBZqaVv7UMao",
    authDomain: "matrixgram-86b58.firebaseapp.com",
    projectId: "matrixgram-86b58",
    storageBucket: "matrixgram-86b58.appspot.com",
    messagingSenderId: "421789787270",
    appId: "1:421789787270:web:7e469bffdbe3dc2ee45d07",
  })
  .auth();
