import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCzOCX9Ehy9kgtfrTNQEW7ulR4K1eApshc",
    authDomain: "school-attendance-app-ee23e.firebaseapp.com",
    projectId: "school-attendance-app-ee23e",
    storageBucket: "school-attendance-app-ee23e.appspot.com",
    messagingSenderId: "1014546201746",
    appId: "1:1014546201746:web:23a761cf01e391a7d9ba4b"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
