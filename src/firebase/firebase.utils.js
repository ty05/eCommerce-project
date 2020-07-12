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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    // Get a reference to the place in the database where the user is stored
    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.error('error creating user', error.message);
      }
    }
    
    return getUserDocumentRef(userAuth.uid);
  };

  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit()

  }


  export const getUserDocumentRef = async uid => {
    if (!uid) return null;
  
    try {
      return firestore.doc(`users/${uid}`);
    } catch (error) {
      console.error('error fetching user', error.message);
    }
  };

  firebase.initializeApp(config);

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        routeNname: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});
  }

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;
