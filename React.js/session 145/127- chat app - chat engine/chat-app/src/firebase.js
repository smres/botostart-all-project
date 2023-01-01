import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBKFMFDd3y4eceEmVUI32DG56h8KecvW0U",
    authDomain: "matrixgram-60d7a.firebaseapp.com",
    projectId: "matrixgram-60d7a",
    storageBucket: "matrixgram-60d7a.appspot.com",
    messagingSenderId: "846793903198",
    appId: "1:846793903198:web:278b909d8e75271c6e78cf",
  })
  .auth();
