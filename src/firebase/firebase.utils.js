import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4em-Zm7T1B95RwJd7ywmU3kQrm3Y4I3I",
    authDomain: "crwn-db-961ad.firebaseapp.com",
    databaseURL: "https://crwn-db-961ad.firebaseio.com",
    projectId: "crwn-db-961ad",
    storageBucket: "crwn-db-961ad.appspot.com",
    messagingSenderId: "711035188862",
    appId: "1:711035188862:web:7dd8b66ac32f2a28368a2f",
    measurementId: "G-KS43DC17FC"
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;
