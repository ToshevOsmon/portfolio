import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfC9fRyJ6BnBj96KlMXT-WdRjK5I5EIs0",
    authDomain: "portfolio-website-25704.firebaseapp.com",
    databaseURL: "https://portfolio-website-25704-default-rtdb.firebaseio.com",
    projectId: "portfolio-website-25704",
    storageBucket: "portfolio-website-25704.appspot.com",
    messagingSenderId: "205298604397",
    appId: "1:205298604397:web:20275c272f92383f282264",
    measurementId: "G-J0FMRVKRDL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;