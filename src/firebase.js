import * as firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwgvySNllvGP0FvLvyIDgjqLBowg1359s",
  authDomain: "react-todo-mvc.firebaseapp.com",
  databaseURL: "https://react-todo-mvc.firebaseio.com",
  projectId: "react-todo-mvc",
  storageBucket: "react-todo-mvc.appspot.com",
  messagingSenderId: "39188960571"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {
    firebaseConfig,
    db,
    provider,
    auth
}