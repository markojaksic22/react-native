import "firebase/firestore";
import firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4byKBhMyI0s-Cco-aGjFZGWru8S851hY",
  authDomain: "signal-df97c.firebaseapp.com",
  projectId: "signal-df97c",
  storageBucket: "signal-df97c.appspot.com",
  messagingSenderId: "1026432895602",
  appId: "1:1026432895602:web:67e8735216e1c28ef5d0eb"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
