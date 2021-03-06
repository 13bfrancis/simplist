import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  db.settings({
    host: "localhost:8080",
    ssl: false,
  });
}

export { firebase, db };
