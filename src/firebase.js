import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB7Wqhz0n8mLq7fwbi7Rc55IhSSIksk2pc",
    authDomain: "fb-messenger-clone-a700e.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-a700e.firebaseio.com",
    projectId: "fb-messenger-clone-a700e",
    storageBucket: "fb-messenger-clone-a700e.appspot.com",
    messagingSenderId: "770105556267",
    appId: "1:770105556267:web:1eccb08db40b2b64eed96e",
    measurementId: "G-44DQ7BFJBV"
  });

const db = firebaseApp.firestore();

export default db;