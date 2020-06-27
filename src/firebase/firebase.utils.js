import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDM7AR7B0vFxm3Noy_4U70WWSdnumMMh9M",
    authDomain: "crwn-db-afc99.firebaseapp.com",
    databaseURL: "https://crwn-db-afc99.firebaseio.com",
    projectId: "crwn-db-afc99",
    storageBucket: "crwn-db-afc99.appspot.com",
    messagingSenderId: "615171239828",
    appId: "1:615171239828:web:f5aecd987e3a0b5791e981",
    measurementId: "G-1JZPKVCDK7"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
    
      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          
          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error.message);
          }
      }

      return userRef;
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

