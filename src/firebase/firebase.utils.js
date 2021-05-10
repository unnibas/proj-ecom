import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAqz78FvxkZpvswOOsocu_BdgZffHsZoNU",
    authDomain: "react-ecom-project-f5035.firebaseapp.com",
    projectId: "react-ecom-project-f5035",
    storageBucket: "react-ecom-project-f5035.appspot.com",
    messagingSenderId: "569175652707",
    appId: "1:569175652707:web:df1ca4f1b0efce17fdfb56"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
