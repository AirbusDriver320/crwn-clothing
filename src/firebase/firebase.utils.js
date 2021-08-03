import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJ8V0Wotdn3YCVBqs3kiYajD3WBKYOky0",
    authDomain: "crwn-db-ef005.firebaseapp.com",
    projectId: "crwn-db-ef005",
    storageBucket: "crwn-db-ef005.appspot.com",
    messagingSenderId: "140058717042",
    appId: "1:140058717042:web:ca8d67f2e1dbafc6c00beb"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;