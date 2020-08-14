import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyDhU0XLRbZBiObEssh5O2Ra4Iwbr-KMtDg",
        authDomain: "messenger-app-629b7.firebaseapp.com",
        databaseURL: "https://messenger-app-629b7.firebaseio.com",
        projectId: "messenger-app-629b7",
        storageBucket: "messenger-app-629b7.appspot.com",
        messagingSenderId: "23653481301",
        appId: "1:23653481301:web:47c9b0ec0771c2a149cddc"

}); 

const db = firebaseApp.firestore();

export default db;