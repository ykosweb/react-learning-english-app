import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

let fbConfig = {
    apiKey: "AIzaSyA-m8KYZs8zDITPmwnZbDHKv7lLw351l8k",
    authDomain: "react-learning-eng-app.firebaseapp.com",
    databaseURL: "https://react-learning-eng-app.firebaseio.com",
    projectId: "react-learning-eng-app",
    storageBucket: "react-learning-eng-app.appspot.com",
    messagingSenderId: "675272436468",
    appId: "1:675272436468:web:d885acb9c5e2b845ef8ca1",
    measurementId: "G-XEPRK28XRF"
};

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;