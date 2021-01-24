import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =

{
    apiKey: "AIzaSyBdOPSg7ULJ9K3hjivca7UdlM7xn9ydiko",
    authDomain: "craft-manager-3e1a3.firebaseapp.com",
    projectId: "craft-manager-3e1a3",
    storageBucket: "craft-manager-3e1a3.appspot.com",
    messagingSenderId: "539514983222",
    appId: "1:539514983222:web:bdca6bc5b4781acaff5997",
    measurementId: "G-S1KS1NYBG9"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select account' });

export const signInWithGoogle = () => auth.signInWithPopUp(provider);
export default firebase;
