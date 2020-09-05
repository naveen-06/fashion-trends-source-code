import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-f80pruXTqgClHwbspRjQ6qqeCzbMZwE",
  authDomain: "fashion-trends-be79a.firebaseapp.com",
  databaseURL: "https://fashion-trends-be79a.firebaseio.com",
  projectId: "fashion-trends-be79a",
  storageBucket: "fashion-trends-be79a.appspot.com",
  messagingSenderId: "177967982713",
  appId: "1:177967982713:web:6fdf2f0f01304b16abcca8",
  measurementId: "G-JHWKDGYB5G"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: "select_account" } );
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;