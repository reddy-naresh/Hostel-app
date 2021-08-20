// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from firebase;


const firebaseConfig = {
    apiKey: "AIzaSyAGBrPa7ZLq4X7z_sLNGob-AAmOx7QBqBI",
    authDomain: "hostel-allocation-assign-a7ee3.firebaseapp.com",
    projectId: "hostel-allocation-assign-a7ee3",
    storageBucket: "hostel-allocation-assign-a7ee3.appspot.com",
    messagingSenderId: "234747342713",
    appId: "1:234747342713:web:96a34f50e5c239b9f449a8",
    measurementId: "G-EKS6WH6W9T"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
