import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDjBjFsCkRZB8T46DODL1diWazzIFreeXU",
    authDomain: "chat-app-22401.firebaseapp.com",
    projectId: "chat-app-22401",
    storageBucket: "chat-app-22401.appspot.com",
    messagingSenderId: "349092654875",
    appId: "1:349092654875:web:4df2fd4c9dd5c6613fedbe",
  });
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };

export default firebase;
